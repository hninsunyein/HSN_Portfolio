const BlogPostsData = [
	{
		id: 4,
		title: "Terminal ထဲက သင့်ရဲ့ AI Coding Partner",
		date: "June 2026",
		image: "assets/images/blog-claude-code.svg",
		excerpt: "Claude Code ဟာ browser-based chat မဟုတ်ဘဲ terminal ထဲမှာ တိုက်ရိုက် အလုပ်လုပ်တဲ့ agentic AI coding tool တစ်ခုဖြစ်ပြီး codebase ဖတ်တာ၊ file ပြင်တာ၊ test run တာ၊ git commit လုပ်တာအထိ ကိုယ်တိုင် လုပ်ဆောင်ပေးနိုင်ပါတယ်။",
		tags: ["AI", "Tools", "Developer"],
		content: `
			<p>နည်းပညာလောကမှာ AI coding tool တွေ အများကြီး ပေါ်လာနေပေမဲ့၊ အများစုက browser ထဲမှာ chat လုပ်ပြီး ကုဒ်ကို copy-paste ပြန်လုပ်ရတဲ့ ပုံစံပါ။ Claude Code ကတော့ ဒီအတွေးအခေါ်ကို လုံးဝ ပြောင်းလဲပစ်လိုက်ပါတယ်။</p>

			<h2>Claude Code ဆိုတာ ဘာလဲ</h2>
			<p>Claude Code ဆိုတာ Anthropic ကနေ ထုတ်လုပ်ထားတဲ့ agentic AI coding tool တစ်ခုဖြစ်ပြီး၊ သင့်ရဲ့ terminal (command line) ထဲမှာ တိုက်ရိုက် အလုပ်လုပ်ပါတယ်။ Browser-based AI chat tool တွေနဲ့ မတူတာက — Claude Code ဟာ သင့်ရဲ့ တကယ့် development environment ထဲမှာ ဝင်ပြီး အလုပ်လုပ်တာပါ။ သင့် project ရဲ့ file structure ကို မြင်တယ်၊ codebase တစ်ခုလုံးကို ဖတ်တယ်၊ ပြီးတော့ သင့်စက်ထဲက real file တွေကို တကယ် ပြင်ဆင်ပေးနိုင်တယ်။</p>

			<h2>ဘာတွေ လုပ်ပေးနိုင်လဲ</h2>
			<p>Claude Code ဟာ ရိုးရိုး autocomplete tool တစ်ခု မဟုတ်ဘဲ၊ task တွေကို autonomous အနေနဲ့ ကိုယ်တိုင် ဆုံးဖြတ်လုပ်ဆောင်နိုင်ပါတယ် —</p>
			<ul>
				<li><strong>Codebase ကို နားလည်အောင်</strong> — "ဒီ project က ဘယ်လို အလုပ်လုပ်လဲ ရှင်းပြပါ" လို့ မေးရုံနဲ့ architecture တစ်ခုလုံးကို သုံးသပ်ပေးတယ်</li>
				<li><strong>Code ရေး/ပြင်</strong> — feature အသစ် ထည့်တာ၊ bug ရှာပြီး ပြင်တာ၊ file အများကြီးကို တစ်ပြိုင်နက် ပြင်တာ (multi-file edits)</li>
				<li><strong>Command run</strong> — test တွေ run တာ၊ build လုပ်တာတွေကို ကိုယ်တိုင် လုပ်ပေးတယ်</li>
				<li><strong>Git workflow</strong> — commit လုပ်တာ၊ pull request ဖန်တီးတာ၊ merge conflict ဖြေရှင်းတာ</li>
				<li><strong>MCP integration</strong> — MCP (Model Context Protocol) server တွေနဲ့ ချိတ်ပြီး ပြင်ပ tool တွေ (database, ticketing system, design tool) ကိုပါ သုံးနိုင်တယ်</li>
			</ul>

			<h2>ဘယ်လို Install လုပ်မလဲ</h2>
			<p>အခုဆိုရင် native installer က Anthropic ရဲ့ အကြံပြုထားတဲ့ နည်းလမ်းဖြစ်ပြီး၊ Node.js မလိုဘဲ macOS, Windows, Linux အားလုံးမှာ အလုပ်လုပ်ပါတယ်။</p>
			<p><strong>macOS / Linux အတွက် —</strong></p>
			<pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
			<p>Windows အတွက်ကတော့ PowerShell ကနေ native installer ကို သုံးနိုင်ပါတယ် (WSL သုံးသူတွေက Linux terminal ထဲကနေ run ပါ)။</p>
			<p>npm နဲ့ install လုပ်ချင်သူတွေအတွက်လည်း ဆက်လက် support ပေးနေဆဲဖြစ်ပြီး (Node.js 18+ လိုအပ်) —</p>
			<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>
			<p>Install ပြီးရင် project folder တစ်ခုထဲမှာ <code>claude</code> လို့ ရိုက်ရုံနဲ့ စတင်နိုင်ပါပြီ။ တစ်ခုခု ပြဿနာရှိရင် <code>claude doctor</code> command က configuration အမှားတွေကို စစ်ပေးပါတယ်။</p>

			<h2>လိုအပ်ချက်တွေ</h2>
			<ul>
				<li><strong>OS</strong> — macOS 10.15+ ၊ Ubuntu 20.04+/Debian 10+ ၊ Windows (native ဒါမှမဟုတ် WSL)</li>
				<li><strong>RAM</strong> — အနည်းဆုံး 4GB</li>
				<li><strong>Internet</strong> — authentication နဲ့ AI processing အတွက် မရှိမဖြစ်</li>
				<li><strong>Account</strong> — Claude Pro, Max, Team, Enterprise ဒါမှမဟုတ် Console (API) account တစ်ခု လိုပါတယ်။ အခမဲ့ Claude.ai plan မှာတော့ Claude Code မပါဝင်ပါဘူး။ အသုံးများသူတွေအတွက်ကတော့ Claude Max subscription က ပိုသက်သာတဲ့ ရွေးချယ်မှု ဖြစ်တတ်ပါတယ်။</li>
			</ul>

			<h2>ဘယ်နေရာတွေမှာ သုံးလို့ရလဲ</h2>
			<p>Terminal တစ်ခုတည်း မဟုတ်ဘဲ — VS Code နဲ့ JetBrains စတဲ့ IDE တွေထဲမှာ extension အနေနဲ့လည်းကောင်း၊ terminal မသုံးချင်သူတွေအတွက် Desktop app (macOS/Windows) အနေနဲ့လည်းကောင်း သုံးနိုင်ပါတယ်။ Claude mobile app ကနေ remote အနေနဲ့ပါ ခိုင်းစေနိုင်တယ်။</p>

			<h2>နိဂုံး</h2>
			<p>Claude Code ဟာ "ကုဒ်ကို ဖြည့်ပေးတဲ့ tool" အဆင့်ကို ကျော်လွန်ပြီး၊ developer တစ်ယောက်ရဲ့ အလုပ်တွေကို တကယ် တာဝန်ယူလုပ်ဆောင်ပေးနိုင်တဲ့ coding agent တစ်ခုဖြစ်ပါတယ်။ Codebase အသစ်ကို နားလည်အောင် လေ့လာဖို့ဖြစ်ဖြစ်၊ ထပ်ခါတလဲလဲ လုပ်ရတဲ့ routine task တွေကို အလိုအလျောက် ဖြေရှင်းဖို့ဖြစ်ဖြစ် — terminal ထဲမှာ အလုပ်လုပ်လေ့ရှိတဲ့ developer တိုင်းအတွက် စမ်းသုံးကြည့်သင့်တဲ့ tool တစ်ခုပါ။</p>
		`,
	},
	{
		id: 1,
		title: "Coding ဆိုတာ အနာဂတ်ရဲ့ စာတတ်မြောက်မှုတစ်ခုပါ",
		date: "June 2026",
		image: "assets/images/blog-coding-literacy.svg",
		excerpt: "ကလေးတွေကို coding သင်ပေးတယ်ဆိုတာ programming language ကို အလွတ်ကျက်ခိုင်းတာမဟုတ်ဘဲ၊ logic စဉ်းစားတတ်ပြီး ပြဿနာကို ကိုယ်တိုင်ဖြေရှင်းတတ်တဲ့ အလေ့အကျင့်ကောင်းကို မွေးပေးခြင်းပါ။",
		tags: ["Education", "Kids", "Coding"],
		content: `
			<p>Coding ဆိုတာ အနာဂတ်ရဲ့ စာတတ်မြောက်မှု (literacy) တစ်ခုပါ။ ကလေးတွေကို coding သင်ပေးတယ်ဆိုတာက programming language ကို အလွတ်ကျက်ခိုင်းတာမျိုး မဟုတ်ပါဘူး။ ပြဿနာတစ်ခုကို problem solving လုပ်ဖို့အတွက် အပိုင်းလေးတွေ ခွဲခြမ်းစိတ်ဖြာတတ်အောင်၊ logic စဉ်းစားတတ်အောင်၊ မှားလို့ရှိရင် ပြန်ပြီးပြင်ဆင်နိုင်အောင်ဆိုတဲ့ အလေ့အကျင့်ကောင်းတစ်ခုကို သင်ကြားပေးခြင်းမျိုး ဖြစ်ပါတယ်။</p>

			<h2>ဘယ်အသက်ကနေ စတင်သင်ကြားနိုင်သလဲ?</h2>
			<p>ကလေးတွေကို coding စပြီးသင်ပေးနိုင်တာကတော့ အသက် ၅ နှစ်ကနေ စပြီးတော့ သင်ပေးနိုင်ပါတယ်။ ဒီမှာဆိုရင် Scratch drag and drop coding လေးတွေနဲ့ တည်ဆောက်ပြီးတော့ ပုံပြင်လေးတွေ ဖန်တီးလို့ရပါတယ်။ ဒါကိုတော့ အသက် ၅ နှစ်ကနေ ၁၂ နှစ်ကြား ကလေးတွေ စသင်နိုင်ပါတယ်။ Python programming language ကိုတော့ အသက် ၁၂ နှစ်ကနေ စပြီးတော့ သင်ကြားပေးမယ်ဆိုရင် ပိုပြီးတော့ အဆင်ပြေမှာပါ။ ဒီလိုသင်ကြားတဲ့နေရာမှာလည်း syntax ထက် logic ကို ပိုပြီးတော့ ဦးစားပေးပြီးတော့ foundation ခိုင်ခိုင်နဲ့ စပြီးတော့ သင်ကြားပေးဖို့ လိုအပ်ပါတယ်။</p>

			<h2>Project-Based Learning</h2>
			<p>နောက်တစ်ခုကတော့ project-based learning ဖြစ်ပါတယ်။ game လေးတွေ စပြီးတော့ ဖန်တီးရေးသားဖို့ creation လုပ်ဖို့ လိုအပ်ပါတယ်။ အဲ့ဒီမှာ output ကို result-oriented ဖြစ်တဲ့ game တွေကို မြင်ရတဲ့အချိန်မှာ ကလေးတွေက ပိုပြီးတော့ coding ကို စိတ်ဝင်စားလာလိမ့်မယ်။</p>
			<p>ကလေးက ပြဿနာတစ်ခုနဲ့ ရင်ဆိုင်ရတဲ့အခါ အဖြေကို ချက်ချင်း ပြောမပြသင့်ပါဘူး။ အဲ့ဒီအစား <em>"မင်း ဘာဖြစ်နေတယ်လို့ ထင်လဲ၊ ဘယ်အပိုင်းမှာ မှားနေတာလဲ"</em> ဆိုပြီး ပြန်မေးတဲ့ မေးခွန်းလေးတွေနဲ့ ကိုယ်တိုင် ရှာဖွေတွေ့ရှိအောင် လမ်းညွှန်ပေးတာက ပိုအကျိုးရှိပါတယ်။ ဒါက coding သက်သက်မဟုတ်ဘဲ၊ ဘဝမှာ ပြဿနာတွေကို ကိုယ့်ဘာသာကိုယ် ဖြေရှင်းတတ်တဲ့ အလေ့အကျင့်ကို မွေးပေးခြင်းပါ။</p>

			<h2>ငယ်ငယ်ကတည်းက စသင်ကြားခြင်း</h2>
			<p>ကလေးတွေက မိခင်ဘာသာစကားကို ငယ်ငယ်ကတည်းက သင်ကြားခဲ့သလို coding ကိုလည်း ငယ်ငယ်ကတည်းကနေ သင်ကြားနိုင်မယ်ဆိုရင် ပိုပြီးတော့ လွယ်ကူနိုင်ပါတယ်။ coding ဆိုတာ အနာဂတ်ရဲ့ စာတတ်မြောက်မှု (literacy) တစ်ခုပါ။ ကလေးတိုင်း programmer ဖြစ်ဖို့ မဟုတ်ပေမဲ့၊ ကိုယ့်စိတ်ကူးတွေကို အကောင်အထည်ဖော်တတ်ဖို့၊ နည်းပညာကို သုံးတတ်ရုံမက ဖန်တီးတတ်ဖို့ဆိုတဲ့ စွမ်းရည်က မျိုးဆက်သစ်တိုင်းအတွက် အင်မတန် တန်ဖိုးရှိပါတယ်။</p>
			<p>ဒါကြောင့် ကလေးတွေကို ငယ်ငယ်ကတည်းက coding ရဲ့ ကမ္ဘာထဲ ပျော်ပျော်ပါးပါး မိတ်ဆက်ပေးကြပါစို့။</p>
		`,
	},
	{
		id: 3,
		title: "Flutter ဆိုတာ ဘာလဲ",
		date: "June 2026",
		image: "assets/images/blog-flutter.svg",
		excerpt: "Flutter က Google ဖန်တီးထားတဲ့ open-source UI framework တစ်ခုဖြစ်ပြီး Dart ဘာသာစကားကို သုံးပြီး Mobile, Web, Desktop App တွေကို code တစ်ခါရေးရုံနဲ့ build လုပ်နိုင်ပါတယ်။",
		tags: ["Flutter", "Dart", "Mobile Dev"],
		content: `
			<p>Flutter ဆိုတာ Google က ဖန်တီးထားတဲ့ open-source UI framework တစ်ခုပဲ ဖြစ်ပါတယ်။ Dart ဆိုတဲ့ programming language ကို သုံးပြီးတော့ Android, iOS, Web, Windows, macOS, Linux App တွေကို code တစ်ခါပဲ ရေးပြီးတော့ platform အားလုံးမှာ run လုပ်နိုင်ပါတယ်။ ဆိုလိုချင်တာကတော့ "Write once, run anywhere" ဆိုတဲ့ concept ပေါ့နော်။</p>

			<h2>Flutter ဘယ်လို အလုပ်လုပ်လဲ?</h2>
			<p>Flutter ရဲ့ အဓိက feature တစ်ခုကတော့ Widget-based architecture ပဲဖြစ်ပါတယ်။ Flutter မှာ UI element တိုင်းကတော့ Widget တစ်ခုပဲ ဖြစ်ပါတယ်။ Button ကလည်း Widget, Text ကလည်း Widget, Row/Column ကလည်း Widget ပဲ ဖြစ်ပါတယ်။ Widget တွေကို ပေါင်းစပ်ပြီး UI တည်ဆောက်တဲ့ပုံစံနဲ့ အလုပ်လုပ်တာကြောင့် UI ကို modular နဲ့ reusable ဖြစ်အောင် ရေးသားလို့ ရပါတယ်။</p>
			<p>Flutter က platform ရဲ့ native component တွေကို မသုံးဘဲ Skia (အခုဆိုရင် Impeller) ဆိုတဲ့ rendering engine ကိုယ်ပိုင်ကို သုံးပြီး UI ကို directly draw လုပ်ပါတယ်။ ဒါကြောင့် platform မရွေး အတူတူသော UI ကို မြင်ရပြီး performance ကလည်း native နဲ့ အနီးစပ်ဆုံး ဖြစ်နိုင်ပါတယ်။</p>

			<h2>Dart Language</h2>
			<p>Flutter မှာ သုံးတဲ့ Dart language ကတော့ Google ကပဲ ဖန်တီးခဲ့တာပါ။ JavaScript နဲ့ Java ကို တွဲပြီး ကြည့်လို့ရတဲ့ syntax ရှိတဲ့ language တစ်ခုပါ။ Type-safe ဖြစ်ပြီး compile time မှာ error တွေကို ဖော်ထုတ်ပေးနိုင်ပါတယ်။ Dart ကို JavaScript အဖြစ် compile လုပ်လို့ ရသလို native machine code အဖြစ်လည်း compile လုပ်လို့ ရပါတယ်။</p>
			<p>Dart ကို JavaScript တတ်ထားသူများ ငါး ရက်မှ တစ်ပတ် အတွင်းမှာ basic syntax ကို ကျွမ်းကျင်နိုင်ပါတယ်။ Object-Oriented Programming ကို base ထားတာကြောင့် OOP တတ်ထားသူတွေအတွက် ပိုမိုလွယ်ကူပါတယ်။</p>

			<h2>Flutter ရဲ့ အားသာချက်များ</h2>
			<p>Flutter ရဲ့ အကြီးမားဆုံး အားသာချက်ကတော့ cross-platform ဖြစ်တာပဲ ဖြစ်ပါတယ်။ code တစ်ခါပဲ ရေးလိုက်ရုံနဲ့ platform ၆ ခုမှာ run လုပ်နိုင်ပါတယ်။ development time နဲ့ cost ကို သိသိသာသာ လျှော့ချနိုင်ပါတယ်။</p>
			<p>နောက်တစ်ခုကတော့ Hot Reload feature ပဲ ဖြစ်ပါတယ်။ code ကို save လုပ်လိုက်တာနဲ့ ချက်ချင်း app ထဲမှာ ပြောင်းလဲမှုကို မြင်ရတာကြောင့် development speed ကို တော်တော်မြန်စေပါတယ်။ app ကို restart မလုပ်ဘဲ state ကို ထိမ်းသိမ်းထားနိုင်ပါတယ်။</p>
			<p>Flutter ဟာ Google ကဖန်တီးထားတဲ့ Material Design component တွေ built-in ပါဝင်ပြီး Apple ရဲ့ Cupertino widget တွေလည်း ပါဝင်ပါတယ်။ ဒါကြောင့် platform တစ်ခုချင်းစီရဲ့ design guideline ကို လိုက်ပြီး app ကို ဆောက်နိုင်ပါတယ်။</p>

			<h2>State Management</h2>
			<p>Flutter မှာ state management approach တွေ အများကြီး ရှိပါတယ်။ Beginner တွေအတွက် <code>setState()</code> ကနေ စပြီး Provider, Riverpod, BLoC, GetX, MobX စသဖြင့် project ရဲ့ complexity အလိုက် ရွေးချယ်နိုင်ပါတယ်။</p>
			<p>Small project တွေအတွက်ဆိုရင် <code>setState()</code> နဲ့ Provider ကပဲ လုံလောက်ပါတယ်။ Enterprise-level project တွေအတွက်ဆိုရင်တော့ BLoC (Business Logic Component) pattern ကို recommend လုပ်ကြပါတယ်။</p>

			<h2>ဘယ်သူတွေ Flutter သုံးနေလဲ?</h2>
			<p>Flutter ကို Google, BMW, Alibaba, eBay, Reflectly, Nubank, Rive တို့ကဲ့သို့သော ကုမ္ပဏီကြီးများ production မှာ သုံးနေကြပါတယ်။ Google ကိုယ်တိုင်ကလည်း Google Pay ကို Flutter နဲ့ ဆောက်ထားပါတယ်။</p>
			<p>Myanmar မှာလည်း Flutter developer တွေ တဖြည်းဖြည်း များလာနေပြီး mobile app တွေ အများအပြားကို Flutter နဲ့ ဆောက်နေကြပါတယ်။</p>

			<h2>Flutter ပထမဦးဆုံး Code ဥပမာ</h2>
			<pre><code>import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'မင်္ဂလာပါ Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('ကျွန်တော်ရဲ့ Flutter App'),
        ),
        body: Center(
          child: Text(
            'မင်္ဂလာပါ Flutter!',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}</code></pre>
			<p>ဒီ code လေးကိုကြည့်ရင် Flutter App တစ်ခုမှာ အခြေခံ structure ကို မြင်နိုင်ပါတယ်။ <code>MaterialApp</code> က app ရဲ့ root widget ဖြစ်ပြီး <code>Scaffold</code> က page ရဲ့ basic layout structure ကို ပေးပါတယ်။</p>

			<h2>Flutter vs React Native — နှိုင်းယှဉ်ကြည့်ရအောင်</h2>
			<table style="width:100%;border-collapse:collapse;margin:1em 0;">
				<thead>
					<tr style="background:rgba(84,197,248,0.15);">
						<th style="padding:0.6em 1em;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1);">အချက်</th>
						<th style="padding:0.6em 1em;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1);">Flutter</th>
						<th style="padding:0.6em 1em;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1);">React Native</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Language</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Dart</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">JavaScript / TypeScript</td>
					</tr>
					<tr>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Performance</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">မြင့်မားတယ် (own renderer)</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">ကောင်းတယ် (native bridge)</td>
					</tr>
					<tr>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">UI Consistency</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Platform အားလုံးမှာ တူတူ</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Platform native UI</td>
					</tr>
					<tr>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Platform Support</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Mobile, Web, Desktop</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Mobile, Web (limited)</td>
					</tr>
					<tr>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">Hot Reload</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">ရှိတယ်</td>
						<td style="padding:0.5em 1em;border-bottom:1px solid rgba(255,255,255,0.06);">ရှိတယ် (Fast Refresh)</td>
					</tr>
					<tr>
						<td style="padding:0.5em 1em;">Ecosystem</td>
						<td style="padding:0.5em 1em;">pub.dev (growing)</td>
						<td style="padding:0.5em 1em;">npm (mature)</td>
					</tr>
				</tbody>
			</table>

			<h2>ဘယ်ကနေ Flutter စသင်ရမလဲ?</h2>
			<p>Flutter ကို စသင်ချင်ရင် flutter.dev ရဲ့ official documentation ကနေ စတာ အကောင်းဆုံးပဲ ဖြစ်ပါတယ်။ "Write your first Flutter app" tutorial ကတော့ beginner တွေအတွက် သင့်တော်ဆုံး starting point ပဲ ဖြစ်ပါတယ်။</p>
			<p>YouTube မှာ FilledStacks, The Net Ninja, Academind တို့ရဲ့ Flutter course တွေကလည်း အလွန်ကောင်းမွန်ပါတယ်။ Dart language ကို Flutter မသင်ခင် တစ်ပတ်လောက် အချိန်ပေးပြီး basic ကို သင်ထားရင် Flutter သင်ကြားရတာ ပိုမိုလွယ်ကူပါတယ်။</p>

			<h2>နိဂုံး</h2>
			<p>Flutter ဟာ modern mobile development မှာ တော်တော်ကို အင်အားကြီးလာပြီဖြစ်တဲ့ framework တစ်ခုပါ။ Code တစ်ခါရေးရုံနဲ့ platform ၆ ခုကို target လုပ်နိုင်တာ၊ Hot Reload ရဲ့ developer experience ကောင်းတာ၊ Google က actively maintain လုပ်နေတာတွေကြောင့် Flutter ကို ယနေ့ app developer တိုင်း သင်ကြားသင့်တဲ့ tool တစ်ခုလို့ ပြောချင်ပါတယ်။</p>
			<p>အထူးသဖြင့် တစ်ယောက်တည်း developer (indie developer) တွေအတွက်ဆိုရင် Flutter က Mobile + Web + Desktop ကို တပြိုင်နက် ထုတ်ပြန်နိုင်တာကြောင့် productivity ကို အများကြီး မြှင့်တင်ပေးနိုင်တဲ့ tool တစ်ခုပဲ ဖြစ်ပါတယ်။</p>
		`,
	},
	{
		id: 2,
		title: "ဟနွိုင်းခရီးစဉ်",
		date: "June 2026",
		image: "assets/images/skills/vietnam.jpg",
		excerpt: "ဗီယက်နမ်ရဲ့ ဟနွိုင်းမြို့ — café culture ကနေ Train Street အထိ၊ street food တွေ၊ ခရီးသွားနည်းတွေနဲ့ တကယ်ကို အလည်သွားကြည့်သင့်တဲ့ မြို့တစ်မြို့ရဲ့ ခရီးမှတ်တမ်းပါ။",
		tags: ["Travel", "Vietnam", "Food"],
		content: `
			<p>ဟနွိုင်းဆိုတာက ဗီယက်နမ်ရဲ့ မြို့တစ်မြို့ ဖြစ်ပါတယ်။ အများအားဖြင့်တော့ Mandalay နဲ့ မခြားမနားဘဲ motorbike တွေနဲ့ပဲ တန်းစီပြီးတော့ သွားနေတဲ့ traffic လမ်းကြောင်းတွေ ရှိပါတယ်။ ဒီမှာဆိုရင် အများစုကတော့ cash VND ကို သုံးတာပါ။ ဟနွိုင်းကို ရောက်လို့ရှိရင် စျေးဆစ်တာက ပုံမှန်တစ်ခုပါ။ Grab စီးမယ်ဆိုရင်တော့ Grab Bike စီးရင် ပိုသက်သာပါတယ်။ တစ်နေရာနဲ့တစ်နေရာ သွားဖို့ရှိရင် လိုင်းကားခရီးတွေ အများကြီးရှိပါတယ်။</p>

			<h2>Café Culture နဲ့ ကြည့်ကောင်းတဲ့ နေရာများ</h2>
			<p>ပထမဦးဆုံး ကိုယ်သွားတာတွေထဲမှာဆို café ဆိုင်လေးတွေ အများကြီးရှိပါတယ်။ ကော်ဖီနံ့လေးတွေကလည်း မွှေးပြီးတော့ ဒါက ဗီယက်နမ်ရဲ့ signature တစ်ခုလို့ ပြောလို့ရပါတယ်။ ပြီးရင် Hoan Kiem လေးနဲ့ Ngoc Son Temple နားကို မနက်စောစော လျှောက်မယ်ဆိုရင်တော့ အကောင်းဆုံးပဲပေါ့။</p>
			<p>Train Street ဆိုပြီးတော့လည်း အိမ်တွေကြားထဲက လမ်းကျဉ်းလေးတွေထဲမှာ မီးရထား ဖြတ်သွားတဲ့ tourist attraction တစ်ခုလည်း ရှိပါတယ်။ ဒါပေမဲ့ မီးရထားဖြတ်မယ့်အချိန်ကိုတော့ အချိန်ဇယားနဲ့ မီးရထားလာမယ့်အချိန်ကို သေချာမေးပြီး စောင့်သင့်ပါတယ်။</p>

			<h2>စားသောက်ဖွယ်ရာများ</h2>
			<p>နောက်တစ်ခုကတော့ fertilized egg လို့ခေါ်တဲ့ အစားအသောက်တစ်မျိုးပေါ့။ ဒါကတော့ နည်းနည်းညှီတယ်ဆိုပေမယ့် သူတို့ရဲ့ စားသောက်ပုံစံလေးအတိုင်း စားမယ်ဆိုလို့ရှိရင်တော့ အရမ်းအရသာရှိတဲ့ အစားအစာတစ်ခုလို့ စာရေးသူကတော့ ပြောချင်ပါတယ်။</p>
			<p>သူတို့ဆီမှာရှိတဲ့ street food တွေက အရမ်းစျေးချိုပြီးတော့ စားလို့လည်း အရမ်းကောင်းပါတယ်။ ထည့်ပေးတဲ့ portion တွေက အရမ်းများတယ်။ Soup ဆိုရင် သူ့ထဲမှာ အရည်တွေရော အဖတ်တွေရော အများကြီးပါပါတယ်။</p>
			<p>ဒါကြောင့်မို့လို့ ဗီယက်နမ် ဟနွိုင်းက တကယ်ကိုမှ အလည်အပတ်သွားကြည့်သင့်တဲ့ မြို့တစ်မြို့ ဖြစ်ပါတယ်။</p>
		`,
	},
];
