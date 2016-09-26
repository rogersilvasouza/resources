//: Playground - noun: a place where people can play

import UIKit

/** Variables
 * var name type = value
 * type is optional
 **/
var fooString: String = "Gasolina"
var fooInteger: Int = 5
var fooDouble: Double = 3.20
var fooArray = [String](["Gasolina", "Alcool", "GNV", "Diesel"])

/** Contansts
 * let name type = value
 * type is optional
 **/
let barString: String = "Gasolina"
let barInteger: Int = 5
let barDouble: Double = 3.20
var barArray = [String](["Gasolina", "Alcool", "GNV", "Diesel"])

/** Concatenate
 * var + var if not string use String() ducking type
 **/
print(fooArray[1] + " " + String(fooDouble))

/** Control Flow
 * if, else if, else
 **/
if fooDouble < 4 {

    print("O " + fooArray[1] + " está barato")

} else if fooDouble > 4.1 {

    print("O " + fooArray[1] + " está caro")

} else {

    print("O " + fooArray[1] + " está incalculável")

}

/** Control Flow
 * for in array
 **/
for foo in fooArray {
    
    print(foo)

}

/** Control Flow
 * Switch
 **/
var vegetable = "red pepper"

switch vegetable {
    
    case "celery":
        print("Add some raisins and make ants on a log.")

    case "cucumber", "watercress":
        print("That would make a good tea sandwich.")

    case let x where x.hasSuffix("pepper"):
        print("Is it a spicy \(x)?")

    default:
        print("Everything tastes good in soup.")

}

/** Control Flow
 * Range
 **/
for i in 0...4 {
    
    print(i)
}
