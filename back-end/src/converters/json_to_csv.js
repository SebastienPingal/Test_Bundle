function json_to_csv(json_file){
}
   

function check_json_lvl(leJson){
    const stringJson = JSON.stringify(leJson);
    let lvl         = 0;
    let lvlmax      = 0;
    for (const char in stringJson){
        if (stringJson[char] == "{"){
            lvl++;
            if (lvl>lvlmax){
                lvlmax = lvl;
            }
        } else if (stringJson[char] == "}"){
            lvl--;
        }
    }
    return lvlmax;
}

function check_json_contain_array(leJson){
    const stringJson  = JSON.stringify(leJson);
    let error       = false;
    for (const char in stringJson){
        if (stringJson[char] == "[" && char != 0){
            return error = true
            }
    }
    return error;
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


console.log(check_json_lvl(json_error));
console.log(check_json_contain_array(json_error));
console.log(check_json_lvl(json_valid));
console.log(check_json_contain_array(json_valid));