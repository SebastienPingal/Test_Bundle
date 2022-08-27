const json_error = {
    "1": {
        "id": "001",
        "customer": "Mickael",
        "items": [7],
        "contact": {
            "mail": "mickael@gmail.com",
            "phone": "0123456789"
        }
    },
    "2": {
        "id": "002",
        "customer": "sarah",
        "items": 2,
        "contact": {
            "mail": "sarah@gmail.com",
            "phone": "0234567891"
        }
    },
    "3": {
        "id": "003",
        "customer": "Joseph",
        "items": 1,
        "contact": {
            "mail": ["joseph@gmail.com"],
            "phone": "0345678912"
        }
    },
    "4": {
        "id": "004",
        "customer": "François",
        "items": 67,
        "contact": {
            "mail": "francois@gmail.com",
            "phone": "0456789123"
        }
    }
}

const json_error2 = {
    "1": {
        "id": "001",
        "customer": "Mickael",
        "items": 7,
        "contact": {
            "mail": "mickael@gmail.com",
            "phone": "0123456789"
        }
    },
    "2": {
        "id": "002",
        "customer": "#ERROR PROCESSING",
        "items": 2,
        "contact": {
            "mail": "sarah@gmail.com",
            "phone": "0234567891"
        }
    },
    "3": {
        "id": "003",
        "customer": "Joseph",
        "items": 1,
        "contact": {
            "mail": "joseph@gmail.com",
            "phone": "0345678912"
        }
    },
    "4": {
        "id": "004",
        "customer": "François",
        "items": 67,
        "contact": {
            "mail": "francois@gmail.com",
            "phone": "#ERROR PROCESSING"
        }
    }
}

const json_error3 = {
    "1": {
        "id": "001",
        "customer": "Mickael",
        "items": 7,
        "contact": {
            "mail": "mickael@gmail.com",
            "phone": "0123456789"
        }
    },
    "2": {
        "id": "002",
        "customer": "sarah",
        "items": 2,
        "contact": {
            "mail": "sarah@gmail.com",
            "phone": "0234567891"
        }
    },
    "3": {
        "id": "003",
        "customer": "Joseph",
        "items": 1,
        "longcat_is_loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong": {
            "mail": "joseph@gmail.com",
            "phone": "0345678912"
        }
    },
    "4": {
        "id": "004",
        "customer": "François",
        "items are soooooo boriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiing omg": 67,
        "contact": {
            "mail": "francois@gmail.com",
            "phone": "0456789123"
        }
    }
}

const json_valid = [
    {
        "name": "John Smith",
        "sku": "20223",
        "price": 23.95,
        "shipTo": {
            "name": "Jane Smith",
            "address": "123 Maple Street",
            "city": "Pretendville",
            "state": "NY",
            "zip": "12345"
        },
        "billTo": {
            "name": "John Smith",
            "address": "123 Maple Street",
            "city": "Pretendville",
            "state": "NY",
            "zip": "12345"
        }
    },
    {
        "name": "Alice Brown",
        "sku": "54321",
        "price": 199.95,
        "shipTo": {
            "name": "Bob Brown",
            "address": "456 Oak Lane",
            "city": "Pretendville",
            "state": "HI",
            "zip": "98999"
        },
        "billTo": {
            "name": "Alice Brown",
            "address": "456 Oak Lane",
            "city": "Pretendville",
            "state": "HI",
            "zip": "98999"
        }
    }
]

const jsonsToConvert = [json_error, json_error2, json_error3, json_valid ]

function convert_json_to_csv (leJson){
    const name = Object.keys(leJson);
    
    let leCsv = "";
    for (const t in name){
        leCsv += name[t] + "; ";
    }
    leCsv += "\n"
    for (const t in name) {
        if (typeof leJson[name[t]] == "object"){
            leCsv += "\n"; 
            return leCsv += convert_json_to_csv (leJson[name[t]]);
        }
        else {
            leCsv += leJson[name[t]] + "; ";
        }
    }
    leCsv += "\n";
    //console.log(leCsv);
    return leCsv;
}

/*for (const element in jsonsToTest){
    console.log("CASE "+  element);
    if (is_json_Ok(jsonsToTest[element])== "Valid Json"){
        convert_json_to_csv(jsonsToTest[element]);
    }
}*/

console.log(convert_json_to_csv (json_valid));