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

function json_to_csv (leJson){
    const sprt      = " ; " ;
    let header      = []    ;
    let content     = []    ;

    for (const i in leJson){
        for (const [key, value] of Object.entries(leJson[i])){
                if (typeof value == "object"){
                    for(const [k, v] of Object.entries(leJson[i][key])){
                        if (header.includes(key + "_" + k) == false){
                            header.push(key + "_" + k);
                        }
                    }
                }
                else {
                    if (header.includes(key) == false){
                        header.push(key);
                    }
                }
        }
    }
   return header;
}


console.log(json_to_csv (json_valid));