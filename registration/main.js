const fs = require("fs");
const stdin = process.openStdin();
let Reset = "\x1b[0m";
let Bright = "\x1b[1m";
let Dim = "\x1b[2m";
let Underscore = "\x1b[4m";
let Blink = "\x1b[5m";
let Reverse = "\x1b[7m";
let Hidden = "\x1b[8m";
let FgBlack = "\x1b[30m";
let FgRed = "\x1b[31m";
let FgGreen = "\x1b[32m";
let FgYellow = "\x1b[33m";
let FgBlue = "\x1b[34m";
let FgMagenta = "\x1b[35m";
let FgCyan = "\x1b[36m";
let FgWhite = "\x1b[37m";
let BgBlack = "\x1b[40m";
let BgRed = "\x1b[41m";
let BgGreen = "\x1b[42m";
let BgYellow = "\x1b[43m";
let BgBlue = "\x1b[44m";
let BgMagenta = "\x1b[45m";
let BgCyan = "\x1b[46m";
let BgWhite = "\x1b[47m";
process.stdout.write("Select File: ");
function printfail(str)
{
    console.log(FgRed + "[ FAIL ] " + Reset + str);
}
function printpass(str)
{
    console.log(FgGreen + "[ PASS ] " + Reset + str);
}
stdin.addListener("data", (data) =>
{
    data = ("" + data).replace("\r\n", "");
    fs.readFile(data, "utf8", (error, data) =>
    {
        if (error)
        {
            printfail("Loading file");
        }
        else
        {
            printpass("Loading file");
            let js = null;
            try
            {
                js = JSON.parse(data);
            }
            catch (e)
            {

            }
            if (js)
            {
                printpass("Valid JSON");
                if (js["registrations"])
                {
                    printpass("Contains Registration Data");
                    let obj = js["registrations"];
                    let csv = "First Name,Last Name,Email,Grade,School";
                    let count = 0;
                    Object.keys(obj).forEach((key) => {
                        printpass("Extracted Key {" + key + "}");
                        count++;
                        let child = obj[key];
                        let str = null;
                        try
                        {
                            str = child["first"].trim() + "," + child["last"].trim() + "," + child["email"].trim() + "," + child["grade"].trim() + "," + child["school"].trim();
                        }
                        catch (e)
                        {

                        }
                        if (str)
                        {
                            printpass("Generated String {" + str + "}");
                            child["STRING"] = str;
                            csv += "\n" + str;
                        }
                        else
                        {
                            printfail("Generated String");
                        }
                    });
                    if (csv.split("\n").length - 1 === count)
                    {
                        printpass("CSV Data Dump");
                        console.log(csv);
                        fs.writeFileSync("output.csv", csv);
                    }
                    else
                    {
                        printfail("CSV Data Dump");
                    }
                    console.log("Registrations: " + count);
                }
                else
                {
                    printfail("Contains Registration Data");
                }
            }
            else
            {
                printfail("Valid JSON");
            }
        }
        process.exit(0);
    });
});