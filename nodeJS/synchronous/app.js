//All of the synchronous files need two parameters

//first para => Name of File
//second para => Content


let fs = require('fs');

// fs.writeFileSync("test.txt","/my test"); 

let data = "writeFile(): asynchronous version ဖြစ်ပြီး callback function သုံးပြီး ရေးသွင်းနိုင်ပါတယ်။  writeFileSync(): synchronous version ဖြစ်ပြီး code execution ကလျော့မြန်မည်၊ ဒါပေမဲ့ လိုအပ်ချက်တွေမှာသာသုံးသင့်ပါတယ်။";

fs.writeFileSync("note.txt",data);





