const json_error = {
    1: {
        id: "001",
        customer: "Mickael",
        items: [7],
        contact: {
            mail: "mickael@gmail.com",
            phone: "0123456789",
        },
    },
    2: {
        id: "002",
        customer: "sarah",
        items: 2,
        contact: {
            mail: "sarah@gmail.com",
            phone: "0234567891",
        },
    },
    3: {
        id: "003",
        customer: "Joseph",
        items: 1,
        contact: {
            mail: ["joseph@gmail.com"],
            phone: "0345678912",
        },
    },
    4: {
        id: "004",
        customer: "François",
        items: 67,
        contact: {
            mail: "francois@gmail.com",
            phone: "0456789123",
        },
    },
};

const json_error2 = {
    1: {
        id: "001",
        customer: "Mickael",
        items: 7,
        contact: {
            mail: "mickael@gmail.com",
            phone: "0123456789",
        },
    },
    2: {
        id: "002",
        customer: "#ERROR PROCESSING",
        items: 2,
        contact: {
            mail: "sarah@gmail.com",
            phone: "0234567891",
        },
    },
    3: {
        id: "003",
        customer: "Joseph",
        items: 1,
        contact: {
            mail: "joseph@gmail.com",
            phone: "0345678912",
        },
    },
    4: {
        id: "004",
        customer: "François",
        items: 67,
        contact: {
            mail: "francois@gmail.com",
            phone: "#ERROR PROCESSING",
        },
    },
};

const json_error3 = {
    1: {
        id: "001",
        customer: "Mickael",
        items: 7,
        contact: {
            mail: "mickael@gmail.com",
            phone: "0123456789",
        },
    },
    2: {
        id: "002",
        customer: "sarah",
        items: 2,
        contact: {
            mail: "sarah@gmail.com",
            phone: "0234567891",
        },
    },
    3: {
        id: "003",
        customer: "Joseph",
        items: 1,
        longcat_is_loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong:
            {
                mail: "joseph@gmail.com",
                phone: "0345678912",
            },
    },
    4: {
        id: "004",
        customer: "François",
        "items are soooooo boriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiing omg": 67,
        contact: {
            mail: "francois@gmail.com",
            phone: "0456789123",
        },
    },
};

const json_valid = [
    {
        name: "John Smith",
        sku: "20223",
        price: 23.95,
        shipTo: {
            name: "Jane Smith",
            address: "123 Maple Street",
            city: "Pretendville",
            state: "NY",
            zip: "12345",
        },
        billTo: {
            name: "John Smith",
            address: "123 Maple Street",
            city: "Pretendville",
            state: "NY",
            zip: "12345",
        },
    },
    {
        name: "Alice Brown",
        sku: "54321",
        price: 199.95,
        shipTo: {
            name: "Bob Brown",
            address: "456 Oak Lane",
            city: "Pretendville",
            state: "HI",
            zip: "98999",
        },
        billTo: {
            name: "Alice Brown",
            address: "456 Oak Lane",
            city: "Pretendville",
            state: "HI",
            zip: "98999",
        },
    },
];

const json_valid2 = [
    {
        color: "red",
        value: "#f00",
    },
    {
        color: "green",
        value: "#0f0",
    },
    {
        color: "blue",
        value: "#00f",
    },
    {
        color: "cyan",
        value: "#0ff",
    },
    {
        color: "magenta",
        value: "#f0f",
    },
    {
        color: "yellow",
        value: "#ff0",
    },
    {
        color: "black",
        value: "#000",
    },
];

const json_valid3 = {
    1: {
        id: "001",
        customer: "Mickael",
        items: 7,
        contact: {
            mail: "mickael@gmail.com",
            phone: "0123456789",
        },
    },
    2: {
        id: "002",
        customer: "sarah",
        items: 2,
        contact: {
            mail: "sarah@gmail.com",
            phone: "0234567891",
        },
    },
    3: {
        id: "003",
        customer: "Joseph",
        items: 1,
        contact: {
            mail: "joseph@gmail.com",
            phone: "0345678912",
        },
    },
    4: {
        id: "004",
        customer: "François",
        items: 67,
        contact: {
            mail: "francois@gmail.com",
            phone: "0456789123",
        },
    },
};

const csv_valid = "";

const jsonsToConvert = [json_error, json_error2, json_error3, json_valid];

function json_to_csv(leJson) {
    const sprt = " ; ";
    let header = [];
    let content = [];

    for (const i in leJson) {
        let content_line = [];
        for (const [key, value] of Object.entries(leJson[i])) {
            if (typeof value == "object") {
                for (const [k, v] of Object.entries(leJson[i][key])) {
                    if (header.includes(key + "_" + k) == false) {
                        header.push(key + "_" + k, sprt);
                    }
                    content_line[header.indexOf(key + "_" + k)] = v;
                    content_line[header.indexOf(key + "_" + k) + 1] = sprt;
                }
            } else {
                if (header.includes(key) == false) {
                    header.push(key, sprt);
                }
                content_line[header.indexOf(key)] = value;
                content_line[header.indexOf(key) + 1] = sprt;
            }
        }
        content_line.splice(-1, 1);

        content.push(content_line);
    }

    header.splice(-1, 1);

    let csv = "";

    for (const i in header) {
        csv += header[i];
    }

    csv += "\n";

    for (const i in content) {
        for (const j in content[i]) {
            csv += content[i][j];
        }
        csv += "\n";
    }

    csv = csv.substring(0, csv.length - 1);

    console.log("csv", csv);
    return csv;
}

function csv_to_json(leCsv) {
    const lines = leCsv.split("\n");
    const header = lines[0].split(" ; ");
    let content = [];
    let leJson = {};

    for (const l in lines) {
        if (l > 0) {
            content[l - 1] = lines[l].split(" ; ");
        }
    }

    for (const c in content) {
        leJson[c] = {};
        for (const t in header) {
            leJson[c][header[t]] = content[c][t];
        }
    }

    return leJson;
}

console.log(json_to_csv(json_valid));
console.log("\n\n");
console.log("=".repeat(50));
console.log(csv_to_json(json_to_csv(json_valid)));
console.log("=".repeat(50));
