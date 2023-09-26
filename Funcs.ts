//1
export function len(str: string) {
    return str.length;
}
//2
export function isPalindrome(str: string) {
    for (let i = 0; i < (str.length / 2); i ++) {
        if (str[i] !== str[str.length - i -1])
            return false
    }
    return true
}
//3
export function sortArr(numArr: number[]) {
    return numArr.sort((a, b) => a - b)
}
//4
export function sqrt(num: number) {
    if (num < 1) return "number must be positive";
    return Math.sqrt(num);
}
//5
export function sumArr(numArr: number[]) {
    return numArr.reduce((sum, num) => sum + num);
}
//6
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export async function fetchUserData(id: number) {
    try {
        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user: User = await userData.json();
        if (!user.id)
            throw new Error(`user does not exist`);
        return user;
    }catch (error){
        return error
    }
}
//7
export function Fibonacci(arr: number[]) {
    const notFibonacci= new Error('does not match to Fibonacci sequence');
    try {
        if (arr.length < 3)
            return notFibonacci;
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2])
                throw notFibonacci;
        }
        return arr[arr.length - 2] + arr[arr.length - 1];
    }catch (error) {
        return error;
    }
}