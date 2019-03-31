# Configure the Microsoft Azure Provider 
provider "azurerm" {
 subscription_id = "xxxxxxxxxxxxxxxxxx" 
 client_id = "xxxxxxxxxxxxxxxxxxxx" 
 client_secret = "xxxxxxxxxxxxxx"
 tenant_id = "xxxxxxxxxxxxxxxxxxx"
}
# create a resource group
resource "azurerm_resource_group" "helloterraform" {
 name = "terraformtest"
 location = "East US"
}

# create a virtual network
resource "azurerm_virtual_network" "helloterraformnetwork" {
 name = "acctvn" address_space = ["10.0.0.0/16"]
 location = "East US"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}"
}
# create subnet
resource "azurerm_subnet" "helloterraformsubnet" {
 name = "acctsub"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}" virtual_network_name = "${azurerm_virtual_network.helloterraformnetwork.name}" address_prefix = "10.0.2.0/24"
}

# create public IP
resource "azurerm_public_ip" "helloterraformips" {
 name = "terraformtestip"
 location = "East US"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}" public_ip_address_allocation = "dynamic"
 tags {
    environment = "TerraformDemo"
 }
}
# create network interface
resource "azurerm_network_interface" "helloterraformnic" {
 name = "tfni"
 location = "East US"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}"
 
 ip_configuration {
    name = "testconfiguration1"
    subnet_id = "${azurerm_subnet.helloterraformsubnet.id}" 
    private_ip_address_allocation = "static" 
    private_ip_address = "10.0.2.5" 
    public_ip_address_id = "${azurerm_public_ip.helloterraformips.id}"
 }
}

# create storage account
resource "azurerm_storage_account" "helloterraformstorage" {
 name = "helloterraformstorage1"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}"
 location = "eastus" 
 account_replication_type = "LRS"
 account_tier = "Standard"

 tags {
    environment = "staging"
 }
}
# create storage container
resource "azurerm_storage_container" "helloterraformstoragestoragecontainer" {
 name = "vhd"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}"
 storage_account_name = "${azurerm_storage_account.helloterraformstorage.name}" 
 container_access_type = "private" 
 depends_on = ["azurerm_storage_account.helloterraformstorage"]
}

# create virtual machine
resource "azurerm_virtual_machine" "helloterraformvm" {
 name = "terraformvm"
 location = "East US"
 resource_group_name = "${azurerm_resource_group.helloterraform.name}" 
 network_interface_ids = ["${azurerm_network_interface.helloterraformnic.id}"] 
 vm_size = "Standard_A0"

 storage_image_reference {
    publisher = "Canonical" 
    offer = "UbuntuServer"
    sku = "14.04.2-LTS"
    version = "latest"
 }
 storage_os_disk {
    name = "myosdisk" 
    vhd_uri = "${azurerm_storage_account.helloterraformstorage.primary_blob_endpoint}${azurerm_storage_container.helloterraformstoragestoragecontainer.name}/myosdisk.vhd"
    caching = "ReadWrite" 
    create_option = "FromImage"
 }
 os_profile {
    computer_name = "hostname" 
    admin_username = "testadmin" 
    admin_password = "Password1234!"
 }
 os_profile_linux_config {
    disable_password_authentication = false
 }
 tags {
    environment = "staging"
 }
}