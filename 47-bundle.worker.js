self.webpackChunk([47],{60:function(e,n,t){"use strict";t.r(n),n.default='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved. \nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0  \n \nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, \nMERCHANTABLITY OR NON-INFRINGEMENT. \n \nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\ninterface BigInt {\n    /**\n      * Returns a string representation of an object.\n      * @param radix Specifies a radix for converting numeric values to strings.\n      */\n    toString(radix?: number): string;\n\n    /** Returns a string representation appropriate to the host environment\'s current locale. */\n    toLocaleString(): string;\n\n    /** Returns the primitive value of the specified object. */\n    valueOf(): bigint;\n\n    readonly [Symbol.toStringTag]: "BigInt";\n}\n\ninterface BigIntConstructor {\n    (value?: any): bigint;\n    readonly prototype: BigInt;\n\n    /**\n      * Interprets the low bits of a BigInt as a 2\'s-complement signed integer.\n      * All higher bits are discarded.\n      * @param bits The number of low bits to use\n      * @param int The BigInt whose bits to extract\n      */\n    asIntN(bits: number, int: bigint): bigint;\n    /**\n      * Interprets the low bits of a BigInt as an unsigned integer.\n      * All higher bits are discarded.\n      * @param bits The number of low bits to use\n      * @param int The BigInt whose bits to extract\n      */\n    asUintN(bits: number, int: bigint): bigint;\n}\n\ndeclare var BigInt: BigIntConstructor;\n\n/**\n  * A typed array of 64-bit signed integer values. The contents are initialized to 0. If the\n  * requested number of bytes could not be allocated, an exception is raised.\n  */\ninterface BigInt64Array {\n    /** The size in bytes of each element in the array. */\n    readonly BYTES_PER_ELEMENT: number;\n\n    /** The ArrayBuffer instance referenced by the array. */\n    readonly buffer: ArrayBufferLike;\n\n    /** The length in bytes of the array. */\n    readonly byteLength: number;\n\n    /** The offset in bytes of the array. */\n    readonly byteOffset: number;\n\n    /**\n      * Returns the this object after copying a section of the array identified by start and end\n      * to the same array starting at position target\n      * @param target If target is negative, it is treated as length+target where length is the\n      * length of the array.\n      * @param start If start is negative, it is treated as length+start. If end is negative, it\n      * is treated as length+end.\n      * @param end If not specified, length of the this object is used as its default value.\n      */\n    copyWithin(target: number, start: number, end?: number): this;\n\n    /** Yields index, value pairs for every entry in the array. */\n    entries(): IterableIterator<[number, bigint]>;\n\n    /**\n      * Determines whether all the members of an array satisfy the specified test.\n      * @param callbackfn A function that accepts up to three arguments. The every method calls\n      * the callbackfn function for each element in the array until the callbackfn returns false,\n      * or until the end of the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    every(callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\n\n    /**\n      * Returns the this object after filling the section identified by start and end with value\n      * @param value value to fill array section with\n      * @param start index to start filling the array at. If start is negative, it is treated as\n      * length+start where length is the length of the array.\n      * @param end index to stop filling the array at. If end is negative, it is treated as\n      * length+end.\n      */\n    fill(value: bigint, start?: number, end?: number): this;\n\n    /**\n      * Returns the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to three arguments. The filter method calls\n      * the callbackfn function one time for each element in the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    filter(callbackfn: (value: bigint, index: number, array: BigInt64Array) => any, thisArg?: any): BigInt64Array;\n\n    /**\n      * Returns the value of the first element in the array where predicate is true, and undefined\n      * otherwise.\n      * @param predicate find calls predicate once for each element of the array, in ascending\n      * order, until it finds one where predicate returns true. If such an element is found, find\n      * immediately returns that element value. Otherwise, find returns undefined.\n      * @param thisArg If provided, it will be used as the this value for each invocation of\n      * predicate. If it is not provided, undefined is used instead.\n      */\n    find(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): bigint | undefined;\n\n    /**\n      * Returns the index of the first element in the array where predicate is true, and -1\n      * otherwise.\n      * @param predicate find calls predicate once for each element of the array, in ascending\n      * order, until it finds one where predicate returns true. If such an element is found,\n      * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\n      * @param thisArg If provided, it will be used as the this value for each invocation of\n      * predicate. If it is not provided, undefined is used instead.\n      */\n    findIndex(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): number;\n\n    /**\n      * Performs the specified action for each element in an array.\n      * @param callbackfn A function that accepts up to three arguments. forEach calls the\n      * callbackfn function one time for each element in the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    forEach(callbackfn: (value: bigint, index: number, array: BigInt64Array) => void, thisArg?: any): void;\n\n    /**\n      * Determines whether an array includes a certain element, returning true or false as appropriate.\n      * @param searchElement The element to search for.\n      * @param fromIndex The position in this array at which to begin searching for searchElement.\n      */\n    includes(searchElement: bigint, fromIndex?: number): boolean;\n\n    /**\n      * Returns the index of the first occurrence of a value in an array.\n      * @param searchElement The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\n      * search starts at index 0.\n      */\n    indexOf(searchElement: bigint, fromIndex?: number): number;\n\n    /**\n      * Adds all the elements of an array separated by the specified separator string.\n      * @param separator A string used to separate one element of an array from the next in the\n      * resulting String. If omitted, the array elements are separated with a comma.\n      */\n    join(separator?: string): string;\n\n    /** Yields each index in the array. */\n    keys(): IterableIterator<number>;\n\n    /**\n      * Returns the index of the last occurrence of a value in an array.\n      * @param searchElement The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\n      * search starts at index 0.\n      */\n    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\n\n    /** The length of the array. */\n    readonly length: number;\n\n    /**\n      * Calls a defined callback function on each element of an array, and returns an array that\n      * contains the results.\n      * @param callbackfn A function that accepts up to three arguments. The map method calls the\n      * callbackfn function one time for each element in the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    map(callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint, thisArg?: any): BigInt64Array;\n\n    /**\n      * Calls the specified callback function for all the elements in an array. The return value of\n      * the callback function is the accumulated result, and is provided as an argument in the next\n      * call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\n      * callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an argument\n      * instead of an array value.\n      */\n    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\n\n    /**\n      * Calls the specified callback function for all the elements in an array. The return value of\n      * the callback function is the accumulated result, and is provided as an argument in the next\n      * call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\n      * callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an argument\n      * instead of an array value.\n      */\n    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\n\n    /**\n      * Calls the specified callback function for all the elements in an array, in descending order.\n      * The return value of the callback function is the accumulated result, and is provided as an\n      * argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\n      * the callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an\n      * argument instead of an array value.\n      */\n    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\n\n    /**\n      * Calls the specified callback function for all the elements in an array, in descending order.\n      * The return value of the callback function is the accumulated result, and is provided as an\n      * argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\n      * the callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an argument\n      * instead of an array value.\n      */\n    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\n\n    /** Reverses the elements in the array. */\n    reverse(): this;\n\n    /**\n      * Sets a value or an array of values.\n      * @param array A typed or untyped array of values to set.\n      * @param offset The index in the current array at which the values are to be written.\n      */\n    set(array: ArrayLike<bigint>, offset?: number): void;\n\n    /**\n      * Returns a section of an array.\n      * @param start The beginning of the specified portion of the array.\n      * @param end The end of the specified portion of the array.\n      */\n    slice(start?: number, end?: number): BigInt64Array;\n\n    /**\n      * Determines whether the specified callback function returns true for any element of an array.\n      * @param callbackfn A function that accepts up to three arguments. The some method calls the\n      * callbackfn function for each element in the array until the callbackfn returns true, or until\n      * the end of the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    some(callbackfn: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\n\n    /**\n      * Sorts the array.\n      * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\n      */\n    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\n\n    /**\n      * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements\n      * at begin, inclusive, up to end, exclusive.\n      * @param begin The index of the beginning of the array.\n      * @param end The index of the end of the array.\n      */\n    subarray(begin: number, end?: number): BigInt64Array;\n\n    /** Converts the array to a string by using the current locale. */\n    toLocaleString(): string;\n\n    /** Returns a string representation of the array. */\n    toString(): string;\n\n    /** Yields each value in the array. */\n    values(): IterableIterator<bigint>;\n\n    [Symbol.iterator](): IterableIterator<bigint>;\n\n    readonly [Symbol.toStringTag]: "BigInt64Array";\n\n    [index: number]: bigint;\n}\n\ninterface BigInt64ArrayConstructor {\n    readonly prototype: BigInt64Array;\n    new(length?: number): BigInt64Array;\n    new(array: Iterable<bigint>): BigInt64Array;\n    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigInt64Array;\n\n    /** The size in bytes of each element in the array. */\n    readonly BYTES_PER_ELEMENT: number;\n\n    /**\n      * Returns a new array from a set of elements.\n      * @param items A set of elements to include in the new array object.\n      */\n    of(...items: bigint[]): BigInt64Array;\n\n    /**\n      * Creates an array from an array-like or iterable object.\n      * @param arrayLike An array-like or iterable object to convert to an array.\n      * @param mapfn A mapping function to call on every element of the array.\n      * @param thisArg Value of \'this\' used to invoke the mapfn.\n      */\n    from(arrayLike: ArrayLike<bigint>): BigInt64Array;\n    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigInt64Array;\n}\n\ndeclare var BigInt64Array: BigInt64ArrayConstructor;\n\n/**\n  * A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the\n  * requested number of bytes could not be allocated, an exception is raised.\n  */\ninterface BigUint64Array {\n    /** The size in bytes of each element in the array. */\n    readonly BYTES_PER_ELEMENT: number;\n\n    /** The ArrayBuffer instance referenced by the array. */\n    readonly buffer: ArrayBufferLike;\n\n    /** The length in bytes of the array. */\n    readonly byteLength: number;\n\n    /** The offset in bytes of the array. */\n    readonly byteOffset: number;\n\n    /**\n      * Returns the this object after copying a section of the array identified by start and end\n      * to the same array starting at position target\n      * @param target If target is negative, it is treated as length+target where length is the\n      * length of the array.\n      * @param start If start is negative, it is treated as length+start. If end is negative, it\n      * is treated as length+end.\n      * @param end If not specified, length of the this object is used as its default value.\n      */\n    copyWithin(target: number, start: number, end?: number): this;\n\n    /** Yields index, value pairs for every entry in the array. */\n    entries(): IterableIterator<[number, bigint]>;\n\n    /**\n      * Determines whether all the members of an array satisfy the specified test.\n      * @param callbackfn A function that accepts up to three arguments. The every method calls\n      * the callbackfn function for each element in the array until the callbackfn returns false,\n      * or until the end of the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    every(callbackfn: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\n\n    /**\n      * Returns the this object after filling the section identified by start and end with value\n      * @param value value to fill array section with\n      * @param start index to start filling the array at. If start is negative, it is treated as\n      * length+start where length is the length of the array.\n      * @param end index to stop filling the array at. If end is negative, it is treated as\n      * length+end.\n      */\n    fill(value: bigint, start?: number, end?: number): this;\n\n    /**\n      * Returns the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to three arguments. The filter method calls\n      * the callbackfn function one time for each element in the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    filter(callbackfn: (value: bigint, index: number, array: BigUint64Array) => any, thisArg?: any): BigUint64Array;\n\n    /**\n      * Returns the value of the first element in the array where predicate is true, and undefined\n      * otherwise.\n      * @param predicate find calls predicate once for each element of the array, in ascending\n      * order, until it finds one where predicate returns true. If such an element is found, find\n      * immediately returns that element value. Otherwise, find returns undefined.\n      * @param thisArg If provided, it will be used as the this value for each invocation of\n      * predicate. If it is not provided, undefined is used instead.\n      */\n    find(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): bigint | undefined;\n\n    /**\n      * Returns the index of the first element in the array where predicate is true, and -1\n      * otherwise.\n      * @param predicate find calls predicate once for each element of the array, in ascending\n      * order, until it finds one where predicate returns true. If such an element is found,\n      * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\n      * @param thisArg If provided, it will be used as the this value for each invocation of\n      * predicate. If it is not provided, undefined is used instead.\n      */\n    findIndex(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): number;\n\n    /**\n      * Performs the specified action for each element in an array.\n      * @param callbackfn A function that accepts up to three arguments. forEach calls the\n      * callbackfn function one time for each element in the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    forEach(callbackfn: (value: bigint, index: number, array: BigUint64Array) => void, thisArg?: any): void;\n\n    /**\n      * Determines whether an array includes a certain element, returning true or false as appropriate.\n      * @param searchElement The element to search for.\n      * @param fromIndex The position in this array at which to begin searching for searchElement.\n      */\n    includes(searchElement: bigint, fromIndex?: number): boolean;\n\n    /**\n      * Returns the index of the first occurrence of a value in an array.\n      * @param searchElement The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\n      * search starts at index 0.\n      */\n    indexOf(searchElement: bigint, fromIndex?: number): number;\n\n    /**\n      * Adds all the elements of an array separated by the specified separator string.\n      * @param separator A string used to separate one element of an array from the next in the\n      * resulting String. If omitted, the array elements are separated with a comma.\n      */\n    join(separator?: string): string;\n\n    /** Yields each index in the array. */\n    keys(): IterableIterator<number>;\n\n    /**\n      * Returns the index of the last occurrence of a value in an array.\n      * @param searchElement The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\n      * search starts at index 0.\n      */\n    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\n\n    /** The length of the array. */\n    readonly length: number;\n\n    /**\n      * Calls a defined callback function on each element of an array, and returns an array that\n      * contains the results.\n      * @param callbackfn A function that accepts up to three arguments. The map method calls the\n      * callbackfn function one time for each element in the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    map(callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint, thisArg?: any): BigUint64Array;\n\n    /**\n      * Calls the specified callback function for all the elements in an array. The return value of\n      * the callback function is the accumulated result, and is provided as an argument in the next\n      * call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\n      * callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an argument\n      * instead of an array value.\n      */\n    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\n\n    /**\n      * Calls the specified callback function for all the elements in an array. The return value of\n      * the callback function is the accumulated result, and is provided as an argument in the next\n      * call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\n      * callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an argument\n      * instead of an array value.\n      */\n    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\n\n    /**\n      * Calls the specified callback function for all the elements in an array, in descending order.\n      * The return value of the callback function is the accumulated result, and is provided as an\n      * argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\n      * the callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an\n      * argument instead of an array value.\n      */\n    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\n\n    /**\n      * Calls the specified callback function for all the elements in an array, in descending order.\n      * The return value of the callback function is the accumulated result, and is provided as an\n      * argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\n      * the callbackfn function one time for each element in the array.\n      * @param initialValue If initialValue is specified, it is used as the initial value to start\n      * the accumulation. The first call to the callbackfn function provides this value as an argument\n      * instead of an array value.\n      */\n    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\n\n    /** Reverses the elements in the array. */\n    reverse(): this;\n\n    /**\n      * Sets a value or an array of values.\n      * @param array A typed or untyped array of values to set.\n      * @param offset The index in the current array at which the values are to be written.\n      */\n    set(array: ArrayLike<bigint>, offset?: number): void;\n\n    /**\n      * Returns a section of an array.\n      * @param start The beginning of the specified portion of the array.\n      * @param end The end of the specified portion of the array.\n      */\n    slice(start?: number, end?: number): BigUint64Array;\n\n    /**\n      * Determines whether the specified callback function returns true for any element of an array.\n      * @param callbackfn A function that accepts up to three arguments. The some method calls the\n      * callbackfn function for each element in the array until the callbackfn returns true, or until\n      * the end of the array.\n      * @param thisArg An object to which the this keyword can refer in the callbackfn function.\n      * If thisArg is omitted, undefined is used as the this value.\n      */\n    some(callbackfn: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\n\n    /**\n      * Sorts the array.\n      * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\n      */\n    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\n\n    /**\n      * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements\n      * at begin, inclusive, up to end, exclusive.\n      * @param begin The index of the beginning of the array.\n      * @param end The index of the end of the array.\n      */\n    subarray(begin: number, end?: number): BigUint64Array;\n\n    /** Converts the array to a string by using the current locale. */\n    toLocaleString(): string;\n\n    /** Returns a string representation of the array. */\n    toString(): string;\n\n    /** Yields each value in the array. */\n    values(): IterableIterator<bigint>;\n\n    [Symbol.iterator](): IterableIterator<bigint>;\n\n    readonly [Symbol.toStringTag]: "BigUint64Array";\n\n    [index: number]: bigint;\n}\n\ninterface BigUint64ArrayConstructor {\n    readonly prototype: BigUint64Array;\n    new(length?: number): BigUint64Array;\n    new(array: Iterable<bigint>): BigUint64Array;\n    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigUint64Array;\n\n    /** The size in bytes of each element in the array. */\n    readonly BYTES_PER_ELEMENT: number;\n\n    /**\n      * Returns a new array from a set of elements.\n      * @param items A set of elements to include in the new array object.\n      */\n    of(...items: bigint[]): BigUint64Array;\n\n    /**\n      * Creates an array from an array-like or iterable object.\n      * @param arrayLike An array-like or iterable object to convert to an array.\n      * @param mapfn A mapping function to call on every element of the array.\n      * @param thisArg Value of \'this\' used to invoke the mapfn.\n      */\n    from(arrayLike: ArrayLike<bigint>): BigUint64Array;\n    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigUint64Array;\n}\n\ndeclare var BigUint64Array: BigUint64ArrayConstructor;\n\ninterface DataView {\n    /**\n      * Gets the BigInt64 value at the specified byte offset from the start of the view. There is\n      * no alignment constraint; multi-byte values may be fetched from any offset.\n      * @param byteOffset The place in the buffer at which the value should be retrieved.\n      */\n    getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;\n\n    /**\n      * Gets the BigUint64 value at the specified byte offset from the start of the view. There is\n      * no alignment constraint; multi-byte values may be fetched from any offset.\n      * @param byteOffset The place in the buffer at which the value should be retrieved.\n      */\n    getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;\n\n    /**\n      * Stores a BigInt64 value at the specified byte offset from the start of the view.\n      * @param byteOffset The place in the buffer at which the value should be set.\n      * @param value The value to set.\n      * @param littleEndian If false or undefined, a big-endian value should be written,\n      * otherwise a little-endian value should be written.\n      */\n    setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\n\n    /**\n      * Stores a BigUint64 value at the specified byte offset from the start of the view.\n      * @param byteOffset The place in the buffer at which the value should be set.\n      * @param value The value to set.\n      * @param littleEndian If false or undefined, a big-endian value should be written,\n      * otherwise a little-endian value should be written.\n      */\n    setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\n}\n'}});