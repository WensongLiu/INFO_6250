#pragma checksum "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "56e0f53f1a04b4eb49decb631faa4943e2ecfb18"
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
#line 1 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/_ViewImports.cshtml"
using midterm_imgpuzzle;

#line default
#line hidden
#line 2 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/_ViewImports.cshtml"
using midterm_imgpuzzle.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"56e0f53f1a04b4eb49decb631faa4943e2ecfb18", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"306ba53aebe8d8340f32889d54c60bbdd8d2974f", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
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
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(38, 27, true);
            WriteLiteral("\r\n<!DOCTYPE html>\r\n<html>\r\n");
            EndContext();
            BeginContext(65, 859, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "56e0f53f1a04b4eb49decb631faa4943e2ecfb183398", async() => {
                BeginContext(71, 846, true);
                WriteLiteral(@"
    <title>Image Puzzle</title>
    <link href=""style.css"" rel=""stylesheet"" />
    <link href=""image-puzzle.css"" rel=""stylesheet"" />
    <script src=""jquery-2.1.1.min.js""></script>
    <script src=""jquery-ui.js""></script>
    <script src=""image-puzzle.js""></script>

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
            BeginContext(924, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(928, 4776, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "56e0f53f1a04b4eb49decb631faa4943e2ecfb185438", async() => {
                BeginContext(934, 2368, true);
                WriteLiteral(@"
    <div id=""collage"">
        <h2>Image Puzzle</h2>
        <hr />
        <div id=""playPanel"" style=""padding:5px;display:none;"">
            <h3 id=""imgTitle""></h3> <hr />
            <div style=""display:inline-block; margin:auto; width:95%; vertical-align:top;"">
                <ul id=""sortable"" class=""sortable""></ul>
                <div id=""actualImageBox"">
                    <div id=""stepBox"">
                        <div>Steps:</div><div class=""stepCount"">0</div>
                    </div>
                    <div id=""timeBox"">
                        Time Taken: <span id=""timerPanel""></span> secs
                    </div>
                    <img id=""actualImage"" />
                    <div>Re-arrange to create a picture like this.</div>
                    <p id=""levelPanel"">
                        <input type=""radio"" name=""level"" id=""easy"" checked=""checked"" value=""3"" /> <label for=""easy"">Easy</label>
                        <input type=""radio"" name=""level"" id=""medium"" value=""4");
                WriteLiteral(@""" /> <label for=""medium"">Medium</label>
                        <input type=""radio"" name=""level"" id=""hard"" value=""5"" /> <label for=""hard"">Hard</label>
                    </p>
                    <div>
                        <button id=""btnRule"" type=""button"" class=""btn"" onclick=""rules();"">Rules</button>
                        <button id=""newPhoto"" type=""button"" class=""btn"">Another Photo</button>
                        <button id=""btnReplay"" type=""button"" class=""btn"" onclick=""about();"">About</button>
                    </div>
                </div>
            </div>
        </div>
        <div id=""gameOver"" style=""display:none;"">
            <div style=""background-color: #fc9e9e; padding: 5px 10px 20px 10px; text-align: center; "">
                <h2 style=""text-align:center"">Game Over!!</h2>
                Congratulations!! <br /> You have completed this picture.
                <br />
                Steps: <span class=""stepCount"">0</span> steps.
                <br />
              ");
                WriteLiteral(@"  Time Taken: <span class=""timeCount"">0</span> seconds<br />
                <div>
                    <button type=""button"" onclick=""window.location.reload(true);"">Play Again</button>
                </div>
            </div>
        </div>

        <script>
            var images = [
                { src: '");
                EndContext();
                BeginContext(3303, 25, false);
#line 75 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_1.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3328, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3340, 27, false);
#line 75 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_1.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3367, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3398, 25, false);
#line 76 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_2.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3423, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3435, 27, false);
#line 76 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_2.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3462, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3493, 25, false);
#line 77 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_3.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3518, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3530, 27, false);
#line 77 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_3.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3557, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3588, 25, false);
#line 78 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_4.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3613, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3625, 27, false);
#line 78 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_4.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3652, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3683, 25, false);
#line 79 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_5.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3708, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3720, 27, false);
#line 79 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_5.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3747, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3778, 25, false);
#line 80 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_6.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3803, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3815, 27, false);
#line 80 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_6.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3842, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3873, 25, false);
#line 81 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_7.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3898, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(3910, 27, false);
#line 81 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_7.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(3937, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(3968, 25, false);
#line 82 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_8.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(3993, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4005, 27, false);
#line 82 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_8.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4032, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4063, 25, false);
#line 83 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_9.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4088, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4100, 27, false);
#line 83 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                        Write(ViewBag.PicInfo_9.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4127, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4158, 26, false);
#line 84 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_10.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4184, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4196, 28, false);
#line 84 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                         Write(ViewBag.PicInfo_10.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4224, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4255, 26, false);
#line 85 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_11.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4281, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4293, 28, false);
#line 85 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                         Write(ViewBag.PicInfo_11.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4321, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4352, 26, false);
#line 86 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_12.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4378, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4390, 28, false);
#line 86 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                         Write(ViewBag.PicInfo_12.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4418, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4449, 26, false);
#line 87 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_13.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4475, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4487, 28, false);
#line 87 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                         Write(ViewBag.PicInfo_13.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4515, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4546, 26, false);
#line 88 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_14.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4572, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4584, 28, false);
#line 88 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                         Write(ViewBag.PicInfo_14.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4612, 30, true);
                WriteLiteral("\' },\r\n                { src: \'");
                EndContext();
                BeginContext(4643, 26, false);
#line 89 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                   Write(ViewBag.PicInfo_15.picLink);

#line default
#line hidden
                EndContext();
                BeginContext(4669, 11, true);
                WriteLiteral("\', title: \'");
                EndContext();
                BeginContext(4681, 28, false);
#line 89 "/Users/G/Documents/2019_Spring/web_tools_6250/midterm_imgpuzzle/midterm_imgpuzzle/Views/Home/Index.cshtml"
                                                         Write(ViewBag.PicInfo_15.picTittle);

#line default
#line hidden
                EndContext();
                BeginContext(4709, 988, true);
                WriteLiteral(@"' }
            ];

            $(function () {
                var gridSize = $('#levelPanel :radio:checked').val();
                imagePuzzle.startGame(images, gridSize);
                $('#newPhoto').click(function () {
                    var gridSize = $('#levelPanel :radio:checked').val();  // Take the updated gridSize from UI.
                    imagePuzzle.startGame(images, gridSize);
                });

                $('#levelPanel :radio').change(function (e) {
                    var gridSize = $(this).val();
                    imagePuzzle.startGame(images, gridSize);
                });
            });
            function rules() {
                alert('Re arrange the image parts in a way that it correctly forms the picture. \nThe total number of steps taken will be counted.');
            }
            function about() {
                alert('Developed by Wensong Liu & Zheng Wang.');
            }
        </script>
    </div>
");
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
            BeginContext(5704, 9, true);
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<PicInfo>> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<List<PicInfo>> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<List<PicInfo>>)PageContext?.ViewData;
        public List<PicInfo> Model => ViewData.Model;
    }
}
#pragma warning restore 1591
