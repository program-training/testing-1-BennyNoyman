import { describe, expect, test } from "vitest";
import {len, isPalindrome, sortArr, sqrt, sumArr, fetchUserData, Fibonacci} from "./Funcs";

describe("testing basic functions", () => {
    test("getting length of a string", () =>{
        const str = "Hello World";
        const length = len(str);
        expect(length).toBe(11);
    });
    test("checks if the string is palindrome", () => {
        const notPalindrome = "doll";
        const palindrome = "madam";
        expect(isPalindrome(notPalindrome)).toBe(false);
        expect(isPalindrome(palindrome)).toBe(true);
    });
    test("sorting array of numbers", () => {
        const arr = [4, 3, 9, 0];
        const result = sortArr(arr);
        expect(result).toEqual([0, 3, 4, 9]);
    });
    test("getting sqrt of a number", () => {
        const num = 49;
        const negativeNum = -5
        const result = sqrt(num);
        const negativeResult = sqrt(negativeNum);
        expect(result).toBe(7);
        expect(negativeResult).toEqual("number must be positive");
    });
    test("sum of an array of numbers", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = sumArr(arr);
        expect(result).toBe(15);
        expect(result).toBeGreaterThan(14);
    });
    test("getting user via api", async () => {
        const user = await fetchUserData(5);
        const user5 = {
            id: 5,
            name: "Chelsey Dietrich",
            username: "Kamren",
            email: "Lucio_Hettinger@annie.ca",
            address: {
                street: "Skiles Walks",
                suite: "Suite 351",
                city: "Roscoeview",
                zipcode: "33263",
                geo: {
                    lat: "-31.8129",
                    lng: "62.5342"
                }
            },
            phone: "(254)954-1289",
            website: "demarco.info",
            company: {
                name: "Keebler LLC",
                catchPhrase: "User-centric fault-tolerant solution",
                bs: "revolutionize end-to-end systems"
            }
        }
        const fakeUser = await fetchUserData(356);
        expect(user).toEqual(user5);
        expect(fakeUser).toStrictEqual(Error("user does not exist"));
    });
    test("getting next node of fibonacci sequence", () => {
        const fibonacciSequence = [1, 2, 3, 5, 8, 13];
        const result = Fibonacci(fibonacciSequence);
        const fakeFibonacciSequence = [1, 2, 3, 4, 5, 8];
        const fakeFibonacciResult = Fibonacci(fakeFibonacciSequence);
        expect(result).toBe(21);
        expect(fakeFibonacciResult).toStrictEqual(Error("does not match to Fibonacci sequence"));
    })
})