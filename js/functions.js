const functions = [
    "((((-x) * (y ^ param1)) / (~(x | param2))) & (((4 + y) % (~x)) * ((y | y) | (x % param3)))) % 10  // 01",
    "((((param1 - y) & (x & x)) ^ ((x * param2) ^ (y & param2))) % (((-y) * (y + 20)) + ((x ^ param3) * (y * y)))) % param3  // 02",
    "((((x % param1) - (param2 / y)) | ((~x) - (-y))) ^ (((y & y) - (x | y)) + ((y + y) * (x * y)))) % param3  // 03",
    "((((y - x) | (param1 / x)) / (~(y ^ x))) * ((~(~y)) & (~(y & param2)))) % param3  // 04 鼠",
    "((((y | x) & (~y)) | ((~x) ** (y & y))) & (((x ^ y) & (x * param1)) - ((-y) - (x & y)))) % param2  // 05",
    "((((~y) & (-param1 * x)) | (-(y & y))) - (((-x) / (-param2 * y)) | (~(y % x)))) % param3  // 06",
    "((((~y) % (x - param1)) - (-(~y))) - (((~x) - (y / param2)) & (-(1 ^ y)))) % param3  // 07",
    "(((-(y / param1)) / ((x | param2) & (x / y))) | ((-(x / x)) - (-(x / param3)))) % 8  // 08",
    "((-((21 - x) ^ (y + param1))) + (((y | y) * (y * x)) | ((param2 + x) & (param3 - x)))) % 5  // 09",
    "((-((param1 % y) + (y % y))) & ((~(~x)) & ((x % param2) % (y + 3)))) % param3  // 10",
    "((-((x | y) | (param1 & y))) ^ (((x / y) * (~y)) % ((x & param2) & (~y)))) % param3  // 11",
    "((-((x | y) | (param1 * y))) ^ (((x / y) * (~y)) % ((x & param2) & (~y)))) % param3  // 12",
    "((-((~y) * (y | x))) * ((~(~y)) % (-(x - y)))) % param1  // 13",
    "((~((param1 & x) - (y * x))) % (((-x) ^ (y / y)) - (-(param2 ^ x)))) % param3  // 14 楽",
    "((~((x * param1) % (x + y))) ^ (((1 ^ y) ^ (-y)) - (~(y / param2)))) % param3  // 15 楽",
    "(x | y) & ((x ^ param1) | (y & param2))  // 16",
    "((((x + param1) ^ (x | x)) | (~(-y))) % (~(~(param2 & x)))) % param3  // 17",
    "((((~x) * (y * y)) ^ (~(~x))) & ((-(-x)) / ((y / param1) | (y - param2)))) % param3  // 18",
    "((((-x) % (-y)) & ((param1 / x) * (x - x))) | (((y - 19) ^ (y + param2)) % ((y & x) % (x ^ y)))) % param3  // 19",
    "((-(x * y * param1)) * (-(x % Math.abs(param2))) & (-(~(x * x)))) % (2 * param3 +1) // 20",
    "((((y | y) % (param1 % x)) - (-(y / param2))) + ((~(x / param3)) - ((x - y) | (x - y)))) % 4  // 21",
    "(~(((y * y) * (-x)) - ((x / y) % (~x)))) % param1  // 22",
    "((~(-(Math.abs(param1) * x - y))) % (((~y) - (x - param2)) | (~(y & x)))) % param3  // 23",
    "(~(((param1 - x) ^ (x & y)) & ((~param2) * (y ^ x)))) % param3  // 24",
    "(~(((param1 - x) ^ (x & y)) & ((~x) * (y ^ x) * Math.abs(param2)))) % param3  // 25",
    "((((x ^ x) % (-x)) / ((x + x) / (param1 ^ x))) + (((y ^ y) / (~y)) - (-(y % param2)))) % param3  // 26",
    "(((~(x & y)) + ((~y) & (y | param1))) & (((~x) + (x & y)) - ((x / param2) | (x * y)))) % param3  // 27",
    "((((y ^ y) + (Math.abs(param1) % y)) + ((~y) | (-x))) % (((x | x) - (param2 % y)) | ((-x) + (y + x)))) % param3  // 28",
    "((-(-(-x))) ^ (~((y & x) % (y * y)))) % param1  // 29",
    "(((~(param1 + x)) + ((x + x) + (y / param2))) | (((-y) % (x ^ y)) + ((~x) * (-y)))) % param3  // 30",
    "((((x * param1) | (y * x)) / ((y * y) % (-x))) | (((y % param2) & (y * x)) / ((y / x) & (7 - x)))) % param3  // 31",
    "((-((y & x) | (-x))) & (((~y) / (param1 ^ y)) ^ ((-x) & (y / y)))) % param2  // 32",
    "((((x * y) + (-x)) / ((-x) ^ (~y))) | ((-(param1 ^ x)) % ((param2 - x) & (x / y)))) % param3  // 33",
    "((((~y) * (y * x)) ^ ((param1 - x) + (param2 + y))) ^ (((x * y) / (x | y)) % ((y | x) * (-x)))) % param3  // 34",
    "(-((~(y % x)) | ((x * param1) & (x + param2)))) % param3  // 35",
    "((~((x * y) - (~x))) & (((-x) ^ (x * (2 * param1 + 1))) & ((Math.abs(param2) ^ x) ^ (y ^ 7)))) % (2 * param3 + 1)  // 36",
    "((-((~y) & (y / param1))) - ((~(~x)) / ((~x) - (x + param2)))) % param3  // 37 鼠",
    "(~(-((y / param1) - (x % param2)))) % param3  // 38",
    "(-(((x - y ^ Math.abs(param1) & (~y * Math.abs(param2)) % (-(x * y)))))) % param3  // 39",
    "((((13 + y) + (param1 % x)) * ((y - x) - (param2 / x))) + ((-(-x)) / ((y + x) - (-x)))) % param3  // 40 鼠",
    "(~(((x * x) | (param1 - y)) * ((param3 % y) | (y ^ Math.abs(param2))))) % 7  // 41 楽",
    "(-(((x | y) + (x % y)) - ((param1 & y) | (y * y)))) % param2  // 42",
    "((~((y * param1) % (x + y))) ^ (((1 ^ y) ^ (-y)) - (~(y / param2)))) % param3  // 43 楽",
    "(~((-(y * x)) | ((y / x) - (y % param1)))) % param2  // 44",
    "((-(~(y | x))) | (((param1 & y) / (x / param2)) | ((-y) & (x ^ 7)))) % param3  // 45",
    "(~(-((y % x) % (x * param1)))) % param2  // 46",
    "((((-x) % (-y)) * ((x - y) / (y * x))) | (-(~(x + param1)))) % param2  // 47",
    "((((param1 - y) | (y | x)) & (~(y | y))) - (((x - 17) | (x % x)) + (~(x ^ param2)))) % param3  // 48",
    "(((~(-y)) | ((y / y) % (-y))) - (((param1 ^ x) & (y * param2)) * (-(~y)))) % param3  // 49",
    "((((Math.abs(param1) | y) & (-x)) % (~(param2 & x))) & (~((y + 6) - (~x)))) % param3  // 50",
    "((~((x * param1) % (x ^ y))) ^ (((1 ^ y) ^ (-y)) - (~(y / param2)))) % param3  // 51",
    "(((-(y % param1)) | ((y ^ x) + (~y))) | (((-y) + (-y)) ^ ((-x) * (x * y)))) % param2  // 52",
    "(-(((-x) % (x / param1)) ^ ((param2 & x) / (-y)))) % param3  // 53 楽",
    "((((x + param1) ^ -x) ^ ((~y) ^ (y % y))) & (((y & param2) / (~x)) * ((~y) | (y / x)))) % param3  // 54",
    "((((y - x) & (x * x)) + ((-y) ^ (x % param1))) * ((-(13 + x)) - ((x * param2) ^ (7 - y)))) % param3  // 55",
    "((((param1 % x) | (~y)) + ((y % y) | (-y))) & ((-(param2 / y)) | (~(~x)))) % param3  // 56",
    "((~((~y) % (~x))) & (((y / y) - (y / param1)) ^ ((x & y) * (param2 & x)))) % param3  // 57",
    "(-(~((y - param1) % (-x)))) % param2  // 58",
    "((-((~x) / (x ^ param1))) + (-((y / param2) % (~y)))) % param3  // 59",
    "((~((~x) + (y | param1))) * (((param2 / x) - (-x)) - ((8 - y) / (x * y)))) % param3  // 60 鼠",
    "((-((-param1 - x) ^ (y | y))) % (-(-(x % y)))) % param2  // 61",
    "(~(((x * param1) / (-y)) | ((param2 - y) - (x / y)))) % param3  // 62",
    "(~(((~x) ^ (y + x)) % (~(~x - param1)))) % param2  // 63 楽",
    "((~((y % x) | (x % x))) / (((y % x) & (param1 & x)) * (~(y ^ Math.abs(param2))))) % param3  // 64 鼠",
    "(((x - y) | ((param1 + y) - (~x))) * (((param2 % x) / (-y)) | ((~y) - (y - x)))) % param3  // 65",
    "((-((~x) / (x ^ Math.abs(param1))) + (-((y / x) % (~y))))) % param2  // 66 鼠",
    "((~((~x) + (y | param1))) * (((param2 / x) - (-x)) - ((8 - y) / (x * y)))) % param3  // 67 楽",
    "(((~(y ^ x)) / ((param1 ^ y) % (~y))) / ((~(11 - x)) / ((param2 * x) - (y * param3)))) % param3  // 68",
    "(((~(-x)) * ((param1 & x) & (y ^ x))) & ((~(-y)) * ((-x) & (param2 & y)))) % (param3 * 2 + 1)  // 69",
    "(((-(y & y)) ^ ((param1 / x) * (-x))) | (((~x) | (y + param2)) * (~(y ^ x)))) % param3  // 70",
    "(((~x) - (param1 & y)) / (~(param1 % x))) % (((-y) | (y + y)) & (-(y - param2)))  // 71 鼠",
    "((((y + param1) & (param2 ^ x)) / ((y & x) ^ (y ^ 8))) - ((~(~y)) & (-(param3 % x)))) % 5  // 72",
    "((((x ^ x) | (y - param1)) + ((x / y) / (-y))) ^ (-((x - param2) * (-y)))) % param3  // 73",
    "((-(-(x | param1))) * (~(-(Math.abs(param2) ^ y)))) % param3  // 74",
    "((((x - param1) + (y / y)) % (~(y - x))) & (-((y - param1) % (param2 * y)))) % param3  // 75",
    "((~(~(~x))) ^ ((-(x % param1)) ^ ((1 / y) / (param2 % y)))) % param3  // 76",
    "(((-(param1 + y)) & (-(-x))) - (((-x) + (y | x)) * (~(x + param2)))) % param3  // 77",
    "((((param1 & x) - (y / param2)) / ((x & x) % (x | 17))) | (~((10 - y) - (y & x)))) % param3  // 78",
    "((((~y) * (~x)) / (~(y + x))) + ((~(y ^ param1)) - ((~y) & (~y)))) % param2  // 79 楽",
    "((((y + x) - (x + param1)) * (~(~y))) + (((-y) & (y % x)) * ((x & param2) ^ (x & x)))) % param3  // 80",
    "(((y & param1) + (x + x)) * ((y | x) * (x & x))) & (((param2 ^ y) * (x % param3)) % ((x + x) | (y / x)))  // 81",
    "(((y & (2 * param1 + 1)) + (x + x)) * ((y | x) * (x & x))) & (((param2 ^ y) * (x % param3)) % ((x + x) | (y / x)))  // 82",
    "(~(((param1 - y) % (-x)) | ((y / x) / (~y)))) % param2  // 83",
    "(~(((param1 - y) % (-x)) | ((y / x) / (~y)))) % param2  // 84",
    "(-((~(param1 / x)) % ((y ^ x) / (-x)))) % param2  // 85 鼠",
    "((~((~y) / (x ^ y))) % ((~(x ^ x)) * ((y + param2) | (~y)))) % param3  // 86",
    "(~(((y ^ param1) / (y / x)) - (-(-y)))) % param2  // 87",
    "((((param1 & y) * (param2 + y)) & ((x + x) ^ (x - 9))) + (~((x - 3) / (-y)))) % param3  // 88 楽",
    "(((~(18 - y)) + ((y % param1) + (x ^ x))) + ((~(y % param2)) | ((x - y) * (x / y)))) % param3  // 89",
    "~(~((-y * -Math.abs(param1)) ^ (-x * -Math.abs(param2)))) % param3  // 90",
    "((((-y) * (x + param1)) ^ ((y / param2) ^ (~y))) - (-(~(-y)))) % param3  // 91",
    "(((~(y | Math.abs(param1)) * (~(1 & y))) & (((y * x) * (param1 * y)) + ((~y) ^ (x * param2))))) % 3  // 92",
    "((((y & param1) - (x - x)) - (~(x & param2))) ^ ((~(x * 2)) / ((3 - y) % (x + y)))) % param3  // 93 楽", 
    "((-(-(y % y))) + (-((~y) % (param1 - x)))) % param2  // 94", 
    "((((y % x) ^ (param1 | x)) - ((y ^ Math.abs(param2) % (x % y))) / (-(-(-y))))) % param3  // 95", 
    "((((param1 + y) | (-y)) % ((x % param2) % (y - x))) - ((~(y * param3)) | (-(x + y)))) % param3  // 96 楽", 
    "((((param1 + y) | (-y)) % ((x % param2) / (y - x))) - ((~(y * param3)) | (-(x + y)))) % param3  // 97 鼠",
    "(~((-(Math.abs(param1) | y)) | ((param2 ^ x) % (x + x)))) % (2 * param3 + 1)  // 98",
    "((((y ^ x) % (param1 ^ y)) - ((y | y) * (y % x))) & ((-(y - x)) & ((y - param2) ^ (y + x)))) % param3  // 99", 
    "((((~y) / (param1 ^ x)) + ((y * param2) ^ (x + y))) + (~((x + y) - (-x)))) % 3  // 100 鼠", 
    "((((x / y) * (~y)) % ((~x) - (param1 / x))) ^ (((y % y) | (y | param2)) ^ (~(~y)))) % param3  // 101",
    "((~((~y) & (-y))) / (((param1 % x) - (2 & x)) ^ ((y - y) % (param2 % x)))) % param3  // 102 鼠", 
    "(~(-((y * x) ^ (y / Math.abs(param1))))) % param2  // 103", 
    "(~(param1 * ((x * x) | (1 - y)) - ((Math.abs(param1) % y) | (y ^ Math.abs(param3))))) % 37  // 104",   
    "((-((x - y) - (~x))) ^ (((x | y) * (x + y)) ^ ((y + param1) * (x | param2)))) % param3  // 105", 
    "((((y & x) - (~x)) ^ ((Math.abs(param1) | y) ^ (x % param2))) | ((-(x & y)) & (~(~y)))) % param3 / 2  // 106 楽", 
    "((-((7 * y) - (~x))) + (((~x) - (x | param1)) + ((x * Math.abs(param2)) - (x ^ 3)))) % param3  // 107 楽",
    "((~(~(~y))) ^ (~((x % param1) % (x % y)))) % param2  // 108", 
    "((((~x) % (-y)) - ((x | y) + (param1 - x))) * (~(-(x % param2)))) % param3  // 109", 
    "(( ((130 * Math.abs(param1) - y)) + (~x) - ((x ^ x) | (x | y))) ^ (-((~x) - (x * Math.abs(param2))))) % param3 / 2  // 111",
    "((((x | y) - (x + 1)) % ((y - param1) - (x * y))) - (((x % y) & (3 * x)) % ((y ^ param2) ^ (x / param3))))  // 111",
    "(((-(x & x)) & ((param1 | y) - (-y))) / (((y & y) ^ (~x)) - ((-y) ^ (x & x)))) % param2  // 112",
    "((((~y + param1) * (~x)) + (~(y + param2))) + ((~y) - ((~y) & (~y)))) % param3  // 113",
    "((((~x) + (1 | y)) % ((x - x) - (y - param1))) - (((-y) | (y - y)) * ((x / y) ^ (param2 & x)))) % param3  // 114",
    "(((y & (2 * param1 + 1)) + (x + x)) * ((y | x) * (x & x))) & (((param2 ^ y) * (x % param3)) % ((x + x) | (y / x)))  // 115",
    "((((param1 | x) % (y - 18)) & (~(~x))) + (-(~(y * Math.abs(param2))))) % param3  // 116",
    "((((x % y) - (x ^ param3)) - ((y | y) * (y * -Math.abs(param1)))) + ((-(x * x)) * ((x / y) & (-x)))) % param2  // 117 楽",
    "((((y - x) % (y + param1)) - ((-y) - (-y))) % (~((x & param2) ^ (x * x)))) % param3  // 118", 
    "((((y ^ 2 + Math.abs(param1)) % (y + x)) - ((-y) - (-y))) % (~((y & param2) ^ (x * x)))) % param3  // 119", 
    "((((x ^ y) + (x ^ param1)) - (-(y * x))) % (-(~(-x * param2)))) % param3  // 120", 
    "((((11 - x) / (y & y)) ^ ((~x) * (y + param1))) / ((-(~x)) % ((~y) | (param2 | x)))) % param3  // 121", 
    "(((~(y + y)) / ((y | param1) + (param2 | x))) - (~((-x) % (x - 3)))) % param3  // 122 鼠",
    "((((x * x) + (param1 & x)) & ((~x) + (~x))) / (~(-(y & param2)))) % param3 // 123 楽", 
    "((((param1 | x) / (x | x)) * (-(x / y))) - (((x & x) + (-Math.abs(50 - param2) * y)) + ((-x) * (8 - x)))) % param3 // 124", 
    "((((param1 | x) / (x | x)) * (-(x / y))) - (((x & x) + (-y)) + ((-x) * (param2 ^ 2 - x)))) % param3 // 125", 
    "(-(-((param1 + x - y) ^ (~x)))) % param2 // 126", 
    "(-(-((-Math.abs(param1) | y) ^ (~x)))) % param2 // 127", 
    "((-(-(x / y))) - ((~(x & param1)) ^ ((x | x) & (param2 + x)))) % param3 // 128 楽",
    "((((2 + y) & (y | y)) + ((y ^ y) / (-x))) / (((param1 - y) | (-y)) - ((x & param2) - (x + x)))) % param3 // 129 鼠",
    "((-((~y) & (-x))) - ((-(y % param1)) + (~(param2 | x)))) % param3 // 130",
    "((((x ^ param1) + (10 % y)) * ((x - 20) / (x | param2))) * (~((-x) - (~y)))) % param3 // 131 楽", 
    "((-((~y * Math.abs(param1)) - (x + y))) / (((-y) * (~x | param2)) & (~(~y)))) % param3  // 132 鼠", 
    "((~((x / Math.abs(param1)) | (param2 ^ x))) * (((y * y) * (~x)) - (~(y | 23)))) % param3 // 133", 
    "(~((-(param1 + x)) & ((-y) / (x + param2)))) % param3   // 134", 
    "((((-y) - (param1 ^ y)) % ((~x) % (~y))) + (-(-(x ^ Math.abs(param2))))) % param3  // 135 楽", 
    "(~(((y | x) & (x % 3)) ^ ((y * Math.abs(param2)) / (-x + param1)))) % param3  // 136", 
    "((~((y ^ param1) + (~x))) ^ (((y / x) * (param2 ^ x)) ^ ((x + 18) + (16 | y)))) % param3  // 137",
    "((~((x * y) - (~x))) & (((-x) ^ (x * (2 * param1 + 1))) & ((param2 ^ x) ^ (y ^ 7)))) % ( 2 * param3 + 1 )  // 138",
    "((((param1 & y) / (y & y)) ^ ((-x) * (~x))) + ((-(y / x)) + ((y * 7) ^ (y * param2)))) % param3 // 139 楽", 
    "((((x * x) ^ (-x)) % (-(param1 - y))) | ((-(x - y)) ^ ((-x) | (param2 / y)))) % param3  // 140",
    "((~((y & x) + (param1 + y))) ^ (~((param2 + x) & (~y)))) % param3  // 141",
    "((~((~x) & (param1 ^ x))) * (((-Math.abs(param2) ^ y) + (~x)) - (~(x + x)))) % param3  // 142",
    "((~(-(7 ^ x))) + ((-(param1 * x)) / ((y % param2) % (19 - y)))) % param3  // 143 鼠",
    "((((~x) - (param1 / x)) & ((x % y) + (param2 & y))) + (((~x) / (y | y)) & ((y / param3) & (x * 11))))   // 144",
    "(~(((y | param1) % x) + ((y * -Math.abs(param2)) * (y * x)))) % param3    // 145",
    "(~(((x + y) * (~y / Math.abs(param1))) ^ ((y | y) & (x / param2)))) % param3  // 146",
    "(-(((-y) ^ (Math.abs(param1) | x)) % ((-x * param2) | (~x)))) % param3  // 147",
    "((((Math.abs(param1) | x) | (x & (y - param2))) % (-(y + x))) & (((-x) / (~y)) / ((~y) ^ (1 * y)))) % param3  // 148",
    "(((~(param1 + y)) & ((x | y) | (~y))) + (((~x) & (~y)) / ((-x) % (param2 & x)))) % param3  // 149", 
    "((((y - x) / (-x)) | (-(y + y))) + (((14 & x) - (y & y)) ^ ((y ^ param1) + (param2 ^ x)))) % param3  // 150",
    "(~(((y * param1) & (x ^ 18)) | ((-Math.abs(param2) * y) % (param2 ^ x)))) % param3 // 151 楽",
    "((((y | 17) / (x + param1)) & (-(x ^ y))) / (((param2 - x) | (y % x)) / ((~y) + (x ^ y)))) % param3  // 152 鼠",
    "((~(-(y % param1))) | (((param2 - x) - (y % param1)) & ((y ^ x) % (15 - y)))) % (param3 / 10)  // 153 鼠",
    "((~(-(y % param1))) | (((param2 - x) - (y % param1)) & ((y ^ x) % (15 - y)))) % parseInt(param3 / 10)  // 154",
    "(((-(y + param1)) ^ ((x - param1) | (~y))) + (((~x) - (x % x)) % ((21 + x) / (y ^ param2)))) % param3 // 155 鼠", 
    "(-(((x | Math.abs(param1)) | (x % x)) / (1 -(x | y)))) % param3 // 156", 
    "(((~(~x)) & ((y / param1) % (x | y))) ^ (((~y) * (-x)) - ((x & (param2 * y)) / (-x)))) % (param3 / 5)  // 157 鼠", 
    "((((y ^ y) * (x | y)) | (-(~y))) / (((x * param1) + (y % x)) & ((x ^ Math.abs(param2)) | (y + 24)))) % param3  // 158", 
    "((((-x) & (x | x)) / ((param1 & y) ^ (param2 % y))) & ((~(y ^ x)) * ((20 | y) + (-x)))) % (param3 / 5)  // 159", 
    "((((y & (param1 * x)) * (y * y)) & ((~x) | (y / x))) / (((x / (x * x)) ^ (-y * -Math.abs(param2))) + ((x / 4) & (~y)))) % param3  // 160 楽",
    "(((-(y & param1)) ^ (~(~x))) % ((-(x * y)) | ((~y) | (x ^ param2)))) % param3  // 161", 
    "((~((x * param1) / (x ^ y))) ^ (((1 ^ y) ^ (-y)) - (~(y / param2)))) % (param3 / 3)  // 162", 
    "(~((-(Math.abs(param1) | y)) | ((param2 ^ x) / (x + x)))) % (2 * param3 + 1)  // 163", 
    "((-((x - y) - (~x))) ^ (((x | y) % (x + y)) ^ ((y + param1) * (x | param2)))) % param3  // 164", 
    "((((x | x * Math.abs(param1)) - (~x)) - ((y | x) * (x & y))) | (~((~x) & (-y * Math.abs(param2))))) % param3 // 165 ",
    "((~((~x) | (~x))) ^ (param2 * ((y + param1) % (~x)) / (-(x | x)))) % param3  // 166", 
    "((((y & x) / (~x)) | ((~x) ^ (y ^ -Math.abs(param2)))) | (((100 - x) * (y - 100)) | ((~x) / (-y)))) % param3  // 167", 
    "(-((-(Math.abs(param1) + x)) | ((x / y * param2) % (y - x)))) % param3  // 168", 
    "(-(((~y + param1) % (~y)) + ((~y) ^ (y % (x + param2))))) % param3 // 169", 
    "((-((-y) + (~y))) % ((-(param1 + x)) & ((10 + y) | (y ^ param2)))) % param3 // 170",
    "(~(((param1 - y) % (-x)) | ((y / x) / (~y)))) % param2  // 171",
    "(~(((-Math.abs(param1) ^ y) % (-x)) | ((y / (x + param2)) / (~y)))) % param3  // 172",
    "((-((~x) * (y + x))) & (((y - param1) ^ (y / x)) % (~(x % param2)))) % param3  // 173",
    "((((x | y) - (-x)) ^ (-(param1 ^ x))) - (~((y * y) + (x + param2)))) % param3  // 174",
    "((((x * y) - (-x)) ^ (-(param1 ^ x))) - (~((y * y) + (x + param2)))) % param3  // 175",
    "((((x * y) - (-x)) ^ (-(Math.abs(param1) ^ x))) / (~((y * y) + (x * param2)))) % param3  // 176 楽",
    "((~((x - param1) % (-y))) & (((x ^ y) + (~x)) ^ ((param2 + x) | (~y)))) % param3  // 177",
    "(((~(x | 2)) * ((param1 ^ y) - (y % x))) % (((x & 1) | (y & y)) % (-(y % param2)))) % param3  // 178 楽", 
    "((((x + y) ^ (~(y + param1))) * ((-x) + (y & x))) | (-((x * x * param2) * (x % y)))) % (2 * param3 + 1)  // 179", 
    "((~(-(x | 1))) * ((-(param1 ^ y)) - (-(param2 ^ y)))) % param3  // 180", 
    "(-(-(((x - param2) % (y + param1)) & (y / y)))) % param3  // 181", 
    "((((x + x) ^ (x + y)) & ((~x) % (x ^ param1))) - (-((1 & x) & (param2 ^ y)))) % param3  // 182 楽",
    "((((x + x) ^ (x + y)) & ((~x) % (x ^ param1))) | (-((1 & x) & (param2 ^ y)))) % param3  // 183 楽",
    "((((-x) / (-x)) + ((y + param1) ^ (y + 10))) / (((~x) ^ (3 * y)) ^ ((y % param2) - (x + x)))) % param3  // 184 鼠", 
    "(~(((~x) * (param1 % y)) | ((-x) ^ (y + x + param2)))) % param3  // 185", 
    "((((param1 * y) / (y * y)) | (~(-y))) % (((-y) & (~x)) / (-((y * param2) / x)))) % param3  // 186 鼠", 
    "((((y & x) ^ (-x)) & ((-x) % (y | x))) + (~((param1 & y) - (x & param2)))) % param3  // 187",
    "((((param1 * y) / (y * y)) | (~(param2 -y))) % (((-y) & (~x)) / (-(y / x)))) % param3  // 188 鼠", 
    "(-((-(param1 & x)) | ((x / y) % (y - x - param2)))) % param3  // 189", 
    "(-((param1 * (~y) % (~y)) + (Math.abs(param2) * (~y) ^ (y % x)))) % param3  // 190", 
    "((-((y % y) * (-y))) ^ (((Math.abs(param1) * x) * (y + param2)) | (-(~y)))) % param3 // 191", 
    "((-((y % y) * (-y))) ^ (((Math.abs(param1) * x) / (y + param2)) | (-(~y)))) % param3 // 192", 
    "((-((y % y) * (-y))) ^ (((Math.abs(param1) * x) & (y + param2)) | (-(~y)))) % param3 // 193",
    "((((~x) & (~x)) + ((x * 12) ^ (x ^ Math.abs(param1)))) + ((~(x + param2)) | ((-y) ^ (~y)))) % (2 * param3 + 1) // 194 楽", 
    "((((y % param1) / (-y)) ^ (-(-y))) + (((y % x) % (~x)) + ((x + y) | (y ^ param2)))) % param3  // 195",
    "((-((-Math.abs(param1) % x) & (-Math.abs(param2) % x))) + (((3 & x) ^ (~x)) % ((y - x) % (y ^ x)))) % param3  // 196",
    "((~((-y) % (param1 * y))) % (-((x | y) % (param2 + x)))) % param3  // 197",
    "(-(~((~y) * Math.abs(param1) / (~x)  * Math.abs(param2)))) % param3 / 5  // 198",
    "((((~x) & (~x)) + ((x * 12) - (x ^ Math.abs(param1)))) + ((~(x + param2)) & ((-y) ^ (~y)))) % (2 * param3 + 1) // 199", 
    "((((y % param1) / (-y)) ^ (-(-y))) / (((y % x) % (~x)) + ((x + y) | (y ^ param2)))) % param3  // 200 鼠",
    "(((-(-y)) + (-(y % y))) + (~((param1 * x) / (y ^ param2)))) % param3  // 201",
    "(~((-(y & (x * param1))) % (-(-(x * param2))))) % param3  // 202",
    "((((~y) + (y % param1)) + ((-y) ^ (y - y))) - ((~(y * param2)) - ((1 | x) % (x | 5)))) % param3  // 203",
    "((((~y) + (y % param1)) + ((-y) ^ (y - y))) + ((~(y * -3 * Math.abs(param2))) / ((1 | x) % (x | 5)))) % param3", 
    "((((-y) | (param1 - x)) + ((x / x) - (y % x))) * (((-x) % (~x)) / ((Math.abs(param2) ^ x) + (-y)))) % param3  // 205",
    "((((-y) + (y * param1)) % ((x & x) & (y & x))) + (((x | x) - (param2 / x)) / (~(-y)))) % param3  // 206 鼠",
    "(-(((param1 - x) * (y ^ x)) + param2 * ((~x) * (x % y)))) % param3  // 207",
    "((-(~x)) | ((y * param1) / (x & param2))) / ((-(~x)) * (~(x - y)))   // 208",
    "((-((Math.abs(param1) * y - y) & (-y))) ^ ((-(-y)) / (-Math.abs(param2) + ((x | y) / (y | y))))) % param3  // 209",
    "(~(~((x | Math.abs(param1)) % (y ^ (x * param2))))) % param3  // 210",
    "((((~y) | (x & y)) ^ ((-x) / (y + 10))) / (((1 - x) * (y % param1)) / ((-y) / (y / param2)))) % param3  // 211 鼠",
    "(((~(-y)) | ((param1 ^ x) & (x % y))) - (-((param2 & x) * (-y)))) % param3  // 212",
    "(~(((~x) - (param1 * (y & x))) + ((y - (x * param2)) % (y / x)))) % param3   // 213",
    "((((-y) ^ (param1 & y)) - ((-x) * (13 % x))) % (~(~(x / param2)))) % param3  // 214",
    "((((~y) / (x * x * param1)) + ((y & param2) + (y - y))) % ((~(~x)) & (-(-y)))) % param3  // 215",
    "(~(((~y) / (x / param1)) - ((x & x) % (x & param2)))) % param3  // 216",
    "((-((x % x) ^ (x - x))) | (((x + param1) - (-y)) + ((8 & y) & (x / param2)))) % param3  // 217",
    "((((y - param1) - (x / y)) % (-(x * y * param2))) / ((~(-x)) | (-(-x)))) % param3  // 218",
    "((((x | y) * (-x)) | ((~y) - (-x))) + ((~(-Math.abs(param1) ^ x)) / ((-x) / (x / -Math.abs(param2))))) % param3  // 219",
    "((~((-x) * (x / Math.abs(param1)))) ^ (param2 * ((y + x) / (y * x)) & ((3 & x) * (x & x)))) % param3  // 220",
    "~((~(-x)) + ((x % param1) + (y / -1)))  // 221",
    "~((~(-x)) + ((x % param1) + (y / -0.1))) % (2 * param2 + 1)  // 222 楽",
    "((((y | param1) ^ (x ^ x)) % (-(-y))) * ((~(-x)) - (((y * param2) / x) & (-x)))) % param3  // 223",
    "(~(-(x * x) * Math.abs(param1))) - (((x - (param2 ^ x)) % (x & x)) ^ ((y - x) * (x / x)))  % param3  // 224",
    "(((-(y - x)) - (-(x / param1))) ^ (param2 * (~(y % x)) - (~(~x)))) % param3  // 225",
    "(((-(y * -Math.abs(param1))) - ((x | 7) & (y * 7))) | (-((x | x) ^ (y ^ param2)))) % param3  // 226",
    "((((param1 / y) + (y / 17)) / ((x * param2) & (y / param3))) & (((x % x) + (x % y)) / ((-x) % (x - 6))))   // 227 楽",
    "((~((param1 ^ y) - (y & x))) / (((~x) / (param2 ^ y)) ^ ((22 + x) % (-x)))) % param3  // 228 鼠",
    "(~(-(Math.abs(param1) * (x % y) % (y * param2)))) % param3  // 229",
    "((((y * x) - (-x)) ^ (-(Math.abs(param1) ^ y))) / (~((x * x) + (y * param2)))) % param3   // 230 鼠",
    "((((~x) % (-y)) ^ (~(param1 % y))) & (((y - x) | (y | x)) % ((x ^ param2) * (x % y)))) % param3  // 231",
    "((((~x) % (-y)) ^ (~(param1 % y))) & (((y - x) & (y | x)) % ((x ^ param2) / (x % y)))) % param3  // 232",
    "((((y % x) ^ (~y)) & ((y - param1) & (x % param2))) ^ (((24 / x) | (param3 ^ y)) % (-(19 * x))))  // 233",
    "((((y % x) ^ (~y)) & ((y - param1) & (x % param2))) ^ (((24 / x) | (11 ^ y)) & (-(19 * x)))) % param3  // 234",
    "((((y % x) ^ (~y)) & ((y - 7) / (x % param1))) ^ (((param2 / x) | (11 ^ y)) & (-(19 * x)))) % param3  // 235",
    "((((y % x) ^ (~y)) & ((y - 7) / (x % param1))) - (((param2 / x) | (11 ^ y)) / (-(19 * x)))) % param3  // 236",
    "((((y % x) ^ (~y)) & ((y - 7) / (x % param1))) - (((y / x) | (11 ^ y)) & (-(param2 * x)))) % param3  // 237",
    "((((y * x) - (-x)) + ((x * Math.abs(param1) ^ y))) / (~((x * x) / (y * -Math.abs(param2))))) % param3   // 238 楽",
    "(~((Math.abs(param1) * (~x) - (y & x)) + (param2 * (y - x) % (y / x)))) % param3  // 239",
    "((((-x) ^ (14 & x)) - ((-y) * (Math.abs(param1) % y))) / (~(~(y / param2)))) % param3  // 240 鼠",
    "((-((x % x) ^ (x - x))) | (((x + 1) - (-y)) / ((param1 & y) & (x / param2)))) % param3  // 241 楽",
    "(-((~(x + param1)) - ((y | x) * (y / (Math.abs(param2) * x))))) % (2 * param3 + 1)  // 242 鼠",
    "(-((~(x + param1)) - ((y | x) - (y / (x/Math.abs(param2) * x))))) % (2 * param3 + 1)  // 243 鼠",
    "((((y | x) & (y + y)) & ((y * x) - (y + x))) % (((y % param2) ^ (y + x)) + (~(~x)))) % (2 * param3 + 1)  // 244",
    "((((x | y) & (param1 * y)) & ((y * x) - (y + x))) % (((y % param2) ^ (y + x)) + (~(~x)))) % (2 * param3 + 1)  // 245",
    "(((param1 * (x | y) * y) & ((param3/param2 * y * x) / (y + x))) % (((y % 3) ^ (y + x)) + (~(~x)))) % 3  // 246",
    "((((param1 + x) % (x % 5)) | ((param2 + y) * (y ^ 2))) & ((~(param3 * y)) | (-(~y)))) % 3  // 247",
    "((((~y) & (-y)) + ((x ^ y) - (~x))) / (((y * param1) | (y + param2)) & ((~y) - (x * y)))) % param3  // 248 鼠",
    "(((~x) - (param1 % y)) / (-(x & param2))) - (((x & param3) | (-x)) | (~(~y)))  // 249 鼠",
    "((((param1 / x) ^ (7 - y)) + ((param2 ^ y) % (x | x))) + ((-(y / x)) ^ ((-x) & (param3 & x)))) % 9  // 250",
    "(((~(x + y)) + ((-x) / (param1 | x))) / (((x % y) + (x ^ y)) ^ ((param2 - x) - (x + x)))) % param3  // 251 鼠",
    "(((-(param1 + x)) | (-(-y))) - (((-y) + (x | y)) * (~(y + param2)))) % param3  // 252",
    "((((x * param1) | (x % y)) * (-(x - param2))) / (((~x) ^ (param3 * x)) * (-(x / 10)))) % 13  // 253 鼠",
    "((((-y) * (x % y) * Math.abs(param1)) + ((y & y) - (~x))) * (((-x) % (x * x) * param2) | (-(~x)))) % param3  // 254",
    "(~(((param1 * (-y)) / (param2 * (-x))) - (-(~x)))) % param3  // 255",
    "(~((((1 + (x + Math.abs(param1) ^ (Math.abs(param2) / 5))) * (-y)) / ((-x))) / ((~x)))) / param3  // 256 鼠",
    "(~((((1 + (x + Math.abs(param1) ^ (Math.abs(param2) / 5))) * (-y)) / ((-x))) / ((~x)))) % param3  // 257",
    "((((x | param1) * (y + y)) / ((y | y) - (x - y))) / ((~(y + x)) - ((y & x) - (y * y)))) % param3    // 258 鼠",
    "(((param1 * (x | y) * (y + y)) / ((y | y) - (x - y)) / param2) - ((~(y + x)) - (param3 * (y & x) - (y * x)))) % 3  // 259",
    "(-((param1 * (x / y) / (y ^ x)) ^ ((~y) | (x / param2) ))) % (2 * param3 -1)  // 260",
    "(-((Math.abs(param1) * (x / y) / (y ^ x)) / ((~y) | (x / param2) ))) % (2 * param3 -1)  // 261 鼠",
    "(-(-((param1 ^ y) - (param2 * x ^ 3)))) % param3  // 262",
    "((((17 + y) | (param1 * x)) & ((-y) + (y * x))) / (((y * param2) | (x % y)) ^ ((y & x) / (-y)))) % param3  // 263 鼠",
    "(((1 / y) / (-x * param1)) & (-(x & x))) | (((y | -Math.abs(param2)) % (22 | x)) / (-(x & param3)))  // 264",
    "(((1 / x) / (-x * param1)) & (-(x & x))) | (((y | -Math.abs(param2)) - (22 | x)) / (-(x & param3)))  // 265",
    "(((1 / x) * (-x * -Math.abs(param1))) & (-(x & x))) | (((y | -Math.abs(param2)) - (22 | x)) / (-(x & param3)))  // 266 楽",
    "(((1 / y) * (-y * -Math.abs(param1))) / (-(y & y))) | (((x | -Math.abs(param2)) - (22 | y)) / (-(y & param3)))  // 267",
    "(((7 / y) / ((-x)) / (-(x & x))) | ((-Math.abs(param2) * (y | 5) % (22 | x)) / (-(x & param3))))  // 268",
    "((((y ^ param1) % (~x)) | ((param2 * x) / (~y))) & (-(-(x | y)))) % param3  // 269",
    "((((y ^ param1) | (~x)) | ((param2 * x) / (~y))) & (-(-(x | y)))) % param3  // 270",
    "((((x ^ param1) * (~y)) / ((param2 * y) / (~x))) & (-(-(y | x)))) % param3  // 271",
    "((((x ^ Math.abs(param1)) * (~y)) / ((Math.abs(param2) * y) / (~x))) / (-(-(y | x)))) % param3  // 272 鼠",
    "((((x ^ Math.abs(param1)) * (~y)) / ((Math.abs(param2) * y) / (~x))) - (-(-(y | x)))) % param3  // 273",
    "((((x % param1) + (y | y)) | ((1 % x) / (y - 1))) * (((~x) ^ (y - y)) ^ ((x + param2) - (x | y)))) % param3  // 274",
    "((((x % param1) + (y | y)) | ((1 % x) / (y - 1))) / (((~x) ^ (y - y)) ^ ((x + param2) - (x | y)))) % param3  // 275 鼠",
    "((((y % x) * (x * y) * Math.abs(param1)) | ((-x) ^ (~x))) / (-((~x) ^ (y / x)) * Math.abs(param2))) % param3  // 276",
    "((((y % x) * (x * y) * Math.abs(param1)) + ((-x) ^ (~x))) / (-((~x) ^ (x / y)) * Math.abs(param2))) % param3  // 277",
    "((((y % x) * (x * y) * Math.abs(param1)) + ((-x) ^ (~x))) / (-((~x)) * Math.abs(param2))) % param3  // 278",
    "((-((~x) / (y / Math.abs(param1 ^ 0.2)))) % (-(~(-y)))) % param3  // 279 鼠",
    "((-(param1 + (~x) / (y / Math.abs(param2 ^ 0.1)))) % (-(~(-y)))) % param3  // 280 鼠",
    "((((x + param1) ^ (x | x)) | (~(-y))) / (~(~(param2 & x)))) % param3  // 281 鼠",
    "((((x + param1) + (x | x)) | (~(-y))) / (~(~(param2 & x)))) % param3  // 282 鼠",    
    "((((-x) ^ (Math.abs(param1) & x)) - ((-y) * (Math.abs(param1) % y))) % (~(~(y / param2)))) % param3  // 283 楽",
    "((((x & param1) + (x % y)) * ((-x) / (x & y))) * (~((param2 % x) & (y % x)))) % param3  // 284",
    "((((x & param1) + (x % y)) * ((-x) - (x & y))) / (~((param2 % x) & (y % x)))) % param3  // 285 鼠",
    "((((x & param1) ^ (x % y)) | ((-x) - (x & y))) / (~((param2 % x) & (y % x)))) % param3  // 286 鼠",
    "((((x & param1) * (x % y)) | ((-x) - (x & y))) - (~((param2 % x) & (y % x)))) % param3  // 287",
    "(~(((Math.abs(param1) * (x * x)) / ((~y) & -Math.abs(param2))) % (~(y / x)))) % param3  // 288",
    "(~(((Math.abs(param1) * (x * x)) / ((~y) & -Math.abs(param2))) - (~(y / x)))) % param3  // 289",
    "(~(((Math.abs(param1) * (x * x)) / ((~y) | -Math.abs(param2))) - (~(x / y)))) % param3  // 290",
    "(~(((Math.abs(param1) * (x * x)) / ((~y) + -Math.abs(param2))) - (~(x / y)))) % param3  // 291",
    "(~((~x) % (param1 ^ y))) & (((x % 2) + (x & y)) * ((y / param2) - (y % param3)))   // 292",
    "(~((~x) % (param1 ^ y))) & (((x % 2) / (x & y)) - ((y / param2) - (y % param3)))  // 293",
    "(~((~x) / (param1 * y))) & (((x % 2) + (x & y)) - ((y / param2) - (y % param3)))  // 294",
    "(( Math.abs(param1) * (-(-x)) | ((y | 3) * (y + param2))) / (-((-x) + (x - x)))) % param3  // 295 鼠",
    "((~((-y) ^ (y - x))) / (param1 * ((x + param2) ^ (y & y)) / (-(~x)))) % param3  // 296 鼠",
    "((~((-y) ^ (y + x))) / (Math.abs(param1) | ((x + param2) ^ (y & y)) / (-(~x)))) % param3  // 297 鼠",
    "((((x + param1) % (~y)) + ((y + x) - (y ^ y))) ^ (((x % param2) % (-y)) & (-(y - param3)))) % 2  // 298",
    "((((x + param1) % (~y)) + ((y + x) - (y ^ y))) / (((x % param2) % (-y)) & (-(y - 3)))) % param3  // 299 鼠",
    "((((y / param1) - (-x)) * ((19 + y) % (x + y))) * (((-y) & (10 ^ y)) | ((param2 * y) % (-x)))) % param3  // 300 鼠",
    "((-((~x) * (y + x))) & (((y - param1) ^ (y / x)) % (~(x % param2)))) % param3  // 301", 
    "-(~(-Math.abs(param1) * (-x) - (-Math.abs(param2) ^ y))) % (2 * param3 + 1)  // 302",
    "((((x & param1) + (x % y)) * ((-x) / (x & y))) * (~((param2 % x) & (y % x)))) % param3  // 303",
    "((((x * -Math.abs(param1)) / (x & x)) * ((y | y) / (-x))) | ((~(x | 16)) * ((param2 % y) * (y | x)))) % param3  // 304",
    "(((-(y & x)) ^ (param1 * (y + x) * (y | x))) / (((-y) ^ (~x)) & ((param2 & y) % (y ^ x)))) % param3  // 305 鼠",
    "(((-(y & x)) ^ (param1 * (y + x) * (y | x))) - (((-y) ^ (~x)) & ((param2 & y) % (y ^ x)))) % (2 * param3 + 1)  // 306",
    "((((~x) ^ (x + param1)) - ((~y) + (~y))) + ((-(x / y)))) % param3  // 307 楽",
    "((((~x) ^ (-Math.abs(x) + param1)) - ((~y) + (~y)) * 0) + (1 * (-(x / y)))) % param3  // 308 鼠",
    "(~(param1 * ((x * x) | (1 - y)) - ((param2 % y) | (y ^ Math.abs(param3))))) % 7   // 309",
    "(~(param1 * ((x * x) | (1 - y)) - ((param2 % y) | (y ^ Math.abs(param3))))) % 3  // 310",
    "(param1 * ((~x) + (7 + x)) + ((12 ^ y) / (13 * y)) * param2) / (((x ^ y) & (y * x)) % ((-x) | (y / param3)))  // 311 鼠",
    "(Math.abs(param1) * ((~y) + (7 + y)) + ((12 ^ x) / (13 * x)) * param2) / (((y ^ x) & (x * y)) % ((-y) % (y / param3)))  // 312",
    "(Math.abs(param1) * ((~y) + (7 + y)) + ((12 ^ x) / (13 * x)) * param2) / (((y ^ x) & (x * y)) % ((-y) / (y / param3)))  // 313 鼠",
    "((~(~(-y))) * (((x ^ -Math.abs(param1)) + (~y)) / (-(y ^ -Math.abs(param2))))) % param3  // 314 鼠",
    "((~(~(-y))) * (((x ^ -Math.abs(param1)) | (~y)) / (-(y ^ -Math.abs(param2))))) % param3  // 315 鼠",
    "(Math.abs(param1) * (((-y) & (~x)) ^ ((x ^ y) / (-x)))) % param3  // 316",
    "(Math.abs(param1) * (((-y) & (~x)) ^ (Math.abs(param2) * (x ^ y) / (-x)))) % param3  // 317",
    "((((-x) ^ (Math.abs(param1) * y)) ^ (~(y) * Math.abs(param2))) / (-((y + x) - (y * x)))) % param3  // 318 鼠",
    "(~(param1 * (~(x & y)) | ((-Math.abs(param2) ^ y) % (-y)))) % param3  // 319",
    "(~(param1 * (~(x & y)) | ((-Math.abs(param2) ^ y) & (-y)))) % (2 * param3 + 1)  // 320",
    "((((y + y) / (-y)) & ((y % param1) & (~x))) * ((~(x / x)) & ((x | y) % (param2 - y)))) % (2 * param3 + 1)  // 321",
    "((((y + y) / (-y)) & ((y % param1) & (~x))) / ((~(x / x)) & ((x | y) | (param2 + y)))) % (2 * param3 + 1)  // 322 鼠",
    "(-((-(~x)) | ((y * Math.abs(param1)) / (~x)) * Math.abs(param2))) % (2 * param3 + 1 )  // 323 楽",
    "(-(((~x)) | ((y * Math.abs(param1)) / (~x)) * Math.abs(param2))) % (2 * param3 + 1 )  // 324",
    "((-((~y) * (x ^ y))) % (((param1 % y) ^ (x ^ y)) & ((x / param2) ^ (x ^ x)))) / param3  // 325 鼠",
    "((-((~y) * (x ^ y))) % (((param1 % y) ^ (x ^ y)) & ((x / param2) ^ (x ^ x)))) % param3  // 326",
    "((-((~y) * (x ^ y))) % (((param1 % y) * (x ^ y)) & ((x / param2) ^ (x ^ x)))) % param3  // 327",
    "((-((~y) * (x ^ y))) % (((param1 % y) | (x ^ y)) & ((x / param2) ^ (x ^ x)))) % param3  // 328",
    "(((-y) * (y % param1)) / ((x ^ y) + (x % param2))) | (((y + x) % (y * x)) | ((y - param3) % (y * x)))  // 329",
    "(((-y) * (y % param1)) / ((x ^ y) + (x % param2))) | (((y + x) | (y * x)) / ((y - param3) % (y * x)))  // 330",
    "((-(param1 * (y % x) + (x - y))) % ((-(-y)) ^ (-(y & param2)))) % param3  // 331",
    "((-(param1 * (y % x) + (x - y))) / ((-(-y)) ^ (-(y & param2)))) % param3  // 332 鼠",
    "((-((y % x) + (x - (Math.abs(param1) ^ 2)))) % ((-(-y)) ^ (-(y & param2)))) % param3  // 333",
    "((-((x % y) + (y - (Math.abs(param1) ^ 2)))) / ((-(-x)) ^ (-(x & param2)))) % param3  // 334 鼠",
    "((-((x + y) + (y - (Math.abs(param1) / 2)))) / ((-(-x)) ^ (-(x & param2)))) % param3  // 335 鼠",
    "(((~(~x)) * ((x & param1) + (5 + x))) | (((5 + y) + (x / y) * param2) + ((y ^ x) & (~x)))) % param3  // 336",
    "((((Math.abs(param1) * y) / (5 % y)) * ((x % y) * (Math.abs(param2) ^ y))) % ((-(x & x)) | ((y & 8) * (y % x)))) % param3  // 337",
    "((((Math.abs(param1) * y) / (5 % y)) * ((x % y) * (Math.abs(param2) ^ y))) + ((-(x & x)) - ((y & 8) + (y % x)))) % param3  // 338",
    "((((Math.abs(param1) * y) / (5 % y)) * ((x % y) * (Math.abs(param2) ^ y))) + ((-(x & x)) - ((y & 8) / (y % x)))) % param3  // 339 鼠",
    "(-(((~x) & (13 - x) * param1) + (param2 * (y + y) ^ (x / y)))) % param3  // 340",
    "(-(((~x) & (13 - x) * param1) | (param2 * (y + y) / (x / y)))) % param3  // 341",
    "(~((-(x ^ y)) + ((y - x) / (param1 * y)))) % param2  // 342",
    "((((~y) % (-x)) + ((y * x) / (x | y))) / (((param1 - y) + (~x)) % (-(param2 | x)))) % param3  // 343 鼠",
    "((((x * y) + (-x)) - ((-x) ^ (~y))) & ((-(param1 ^ x)) % ((param2 - x) & (x / y)))) % param3  // 344",
    "((((x * y) + (-x)) - ((-x) ^ (~y))) & ((-(param1 ^ x)) / ((param2 - x) + (x / y)))) % param3  // 345",
    "((((x * y) + (-x)) - ((-x) ^ (~y))) & ((-(param1 ^ x)) + ((param2 - x) / (x / y)))) % param3  // 346",
    "(((~x) | (param1 * x)) + (~(y | y))) * (Math.abs(param2) * (~(~y)) / ((~y) | (x % param3)))  // 347 鼠",
    "(((~x) | (param1 * x)) + (~(y | y))) * (Math.abs(param2) * (~(~y)) * ((~y) / (x % param3)))  // 348",
    "(~(param1 * ((y + y) + (~x)) | (~(x * y / param2)))) % param3  // 349",
    "(-((param1 * x) / (x - y))) | (((16 | x) | (y % param2)) - (-(param3 & x)))  // 350 鼠",
    "(-((-Math.abs(param1) * y) + (y + y))) / (((param1 | y) | (x % param2)) - (-(param3 & y)))  // 351",
    "((((~y) ^ (y + param1)) / ((5 % x) - (x / y))) & (((param2 | y) & (~y)) | ((1 % y) & (6 & y)))) % param3  // 352",


];
