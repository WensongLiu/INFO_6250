#pragma checksum "/Users/G/Desktop/assignment_3/Views/Home/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "69a959a684c02fe43962829fa668fec8ac5bf1cb"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.razor-page", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index), null)]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "/Users/G/Desktop/assignment_3/Views/_ViewImports.cshtml"
using assignment_3;

#line default
#line hidden
#line 2 "/Users/G/Desktop/assignment_3/Views/_ViewImports.cshtml"
using assignment_3.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"69a959a684c02fe43962829fa668fec8ac5bf1cb", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a15d1f946d3bb50a8cabd377d54698d727bc145b", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(14, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(58, 194, true);
            WriteLiteral("\r\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\r\n");
            EndContext();
            BeginContext(252, 729, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "69a959a684c02fe43962829fa668fec8ac5bf1cb4084", async() => {
                BeginContext(258, 716, true);
                WriteLiteral(@"
    <meta charset=""UTF-8"" />
    <link rel=""stylesheet"" href=""style.css"" type=""text/css"" />
    <title>Assignment_3 | INFO 6250</title>

    <!-- import jQuery  -->
    <script src=""http://code.jquery.com/jquery-3.3.1.min.js""
            integrity=""sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=""
            crossorigin=""anonymous""></script>
    <!-- import jQuery-UI -->
    <script src=""http://code.jquery.com/ui/1.12.1/jquery-ui.min.js""
            integrity=""sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=""
            crossorigin=""anonymous""></script>

    <!-- css for jQuery-UI -->
    <link rel=""stylesheet"" href=""http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"" />   
");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(981, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(983, 3705, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "69a959a684c02fe43962829fa668fec8ac5bf1cb5985", async() => {
                BeginContext(989, 307, true);
                WriteLiteral(@"
    <div id=""page"" align=""center"">

        <div id=""header"">
            <div id=""companyname"" align=""left""><font size=""6"">Counting Words Application</font> <font size=""1"">Support English, Chinese and Hindi. </font></div>
            <div align=""right"" class=""links_menu"" id=""menu"">
                ");
                EndContext();
                BeginContext(1296, 532, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "69a959a684c02fe43962829fa668fec8ac5bf1cb6689", async() => {
                    BeginContext(1316, 505, true);
                    WriteLiteral(@"
                To show corresponding counting results for saved words please click: 
                    <input type=""submit""
                           name=""submitbtn""
                           value=""Chinese"" />
                    <input type=""submit""
                           name=""submitbtn""
                           value=""English"" />
                    <input type=""submit""
                           name=""submitbtn""
                           value=""Hindi"" />
                ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1828, 1769, true);
                WriteLiteral(@"
            </div>
        </div>
        <br />
        <div id=""content"">
            <div id=""leftpanel"">
                <div class=""table_top"">
                    <div align=""center""><span class=""title_panel"">How to use.</span> </div>
                </div>
                <div class=""table_content"">
                    <div class=""table_text"">
                        <span class=""news_text"">Type words you want to count in the textarea, then you can click ""Save"" button to save words for future counting, click other 3 count buttons to show corresponding language's counting result for current input.</span><br />
                        <span class=""news_date"">IMPORTANT: Numbers are not supported for this application!</span> <br />
                    </div>
                </div>
                <div class=""table_bottom"">
                    <img src=""images/table_bottom.jpg"" width=""204"" height=""23"" border=""0"" alt="""" />
                </div>
                <br />
                <div");
                WriteLiteral(@" class=""table_top"">
                    <span class=""title_panel"">Instructor</span>
                </div>
                <div class=""table_content"">
                    <div class=""table_text"">
                        <span class=""news_text"">Dino Konstantopoulos</span>
                        <br />
                        <span class=""news_text"">Meven Edwin DCunha</span>
                    </div>
                </div>
                <div class=""table_bottom"">
                    <img src=""images/table_bottom.jpg"" width=""204"" height=""23"" border=""0"" alt="""" />
                </div>
                <br />
            </div>
            <div id=""contenttext"">
                <div class=""counter"">
                    ");
                EndContext();
                BeginContext(3597, 874, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "69a959a684c02fe43962829fa668fec8ac5bf1cb10796", async() => {
                    BeginContext(3617, 847, true);
                    WriteLiteral(@"
                        <div>
                            <textarea type=""text"" name=""inputtext"" id=""inputtext"" placeholder=""Please type in here for counting.""></textarea>
                        </div>

                        <input type=""submit""
                               name=""submitbtn""
                               value=""Save"" />

                        <input type=""submit""
                               name=""submitbtn""
                               value=""Count Chinese Words"" />
                        <input type=""submit""
                               name=""submitbtn""
                               value=""Count English Words"" />
                        <input type=""submit""
                               name=""submitbtn""
                               value=""Count Hindi Words"" />
                    ");
                    EndContext();
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(4471, 210, true);
                WriteLiteral("\r\n                </div>\r\n                <br />\r\n            </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n            ©Copyright Wensong Liu<br />\r\n            2019.01.27\r\n        </div>\r\n    </div>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4688, 9, true);
            WriteLiteral("\r\n</html>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<assignment_3.Models.WordsCounting> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<assignment_3.Models.WordsCounting> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<assignment_3.Models.WordsCounting>)PageContext?.ViewData;
        public assignment_3.Models.WordsCounting Model => ViewData.Model;
    }
}
#pragma warning restore 1591
