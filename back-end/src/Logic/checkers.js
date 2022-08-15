function test_json(leJson){
    let statusCode = []
    if (check_json_lvl(leJson) > 3 ){
        statusCode.push(1);
    };
    if (check_json_contain_array(leJson).length != 0){
        statusCode.push(2);
    }
    if (check_processing_error(leJson) != 0){
        statusCode.push(3);
        const temp = check_processing_error(leJson);
        statusCode.push(temp.length)
        for (const t in temp){
        statusCode.push(temp[t]);
    }
    }
    if (check_json_less_than_64_char(leJson) != 0){
        statusCode.push(4);
    }
    return statusCode;
}  

function interprete_error(lArray){
    let log_error = "";
    for (let t in lArray){
        switch (lArray[t]){
            case 1 :
                log_error += "Json file too deep." + "\n";
                break;
            case 2 :
                log_error += "Json file contain array." + "\n";
                break;
            case 3 :
                for (let i=2; i <= lArray[Number(t)+1]+1; i++){
                log_error += "Processing error at " + lArray[Number(t)+ i] + "\n";
                }
                break;
            case 4 :
                log_error += "At least one key is too long"+ "\n";
                break;
        }        
    }
    if (log_error == ""){
        console.log("Valid Json")
    }
    else {
        console.log(log_error);
    }
}

function check_json_lvl(leJson){
    const name = Object.keys(leJson);
    let lvlMax = 1;
    for (const property in name) {
        if (typeof leJson[name[property]] == "object"){
            let lvl = 1;
            lvl += check_json_lvl(leJson[name[property]]);
            if (lvl > lvlMax){
            lvlMax = lvl;
            }
        }
      }
    return lvlMax;
}

function check_json_contain_array(leJson){
    const name = Object.keys(leJson);
    let errors = [];
    for (const property in name) {
        if (Array.isArray(leJson[name[property]])){
            errors.push(name[property]);
            return errors;
        }
        if (typeof leJson == "object"){
            const t = check_json_contain_array(leJson[name[property]])
            if (t != [] ){
            errors.push(t);
            }
        }
      }
    return errors.flat();
}

function check_processing_error(leJson) {
    const name = Object.keys(leJson);
    let errors = [];
    for (const property in name) {
        if (leJson[name[property]] == "#ERROR PROCESSING"){
            errors.push(name[property]);
            return errors;
        }
        if (typeof leJson == "object"){
            //console.log ("boucle " + leJson[name[property]]);
            const t = check_processing_error(leJson[name[property]])
            if (t != 0 ){
            errors.push(t);
            }
        }
      }
    return errors.flat();
}

function check_json_less_than_64_char(leJson){
    const name = Object.keys(leJson);
    for (const property in name) {
        //console.log(leJson[name[property]].length);
        if (typeof name[property] == "string" && name[property].length > 64){
            return "error";
        }
        if (typeof leJson == "object"){
            //console.log ("boucle " + leJson[name[property]]);
            const nest = check_json_less_than_64_char(leJson[name[property]]);
            if (nest != 0){
                return nest;
            }
        }
      }
    return "0";
}

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

const jsonsToTest = [json_error, json_error2, json_error3, json_valid ]

for (const element in jsonsToTest){
    console.log("CASE "+  element);
    interprete_error(test_json(jsonsToTest[element]));
}
