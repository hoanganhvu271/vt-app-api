
# import thư viện re và math
import re
import math


def isSquare(n):
    # Kiểm tra phần nguyên của sqrt(n) ^ 2 có bằng n hay không?
    if n < 0:
        return False
    sqrt_n = int(math.sqrt(n))
    return sqrt_n * sqrt_n == n


def isFibonacci(n):
    # Nếu n là số Fibonacci thì 5 * n^2 + 4 hoặc 5 * n^2 - 4 sẽ là số chính phương
    x1 = 5 * n * n + 4
    x2 = 5 * n * n - 4
    if isSquare(x1) or isSquare(x2):
        return True
    return False


def squareNumFind(s):
    # Tìm tất cả các số trong chuỗi sử dụng re để tìm theo regex
    #        r: chuỗi thô
    #       '\d+' : dãy chữ số

    numbers = re.findall(r'\d+', s)
    squareList = [int(num) for num in numbers if isSquare(int(num))]
    squareSet = set(squareList)

    print("Danh sách các số chính phương là: ", end='')
    for num in squareSet:
        print(num, end='')
        if num != list(squareSet)[-1]:
            print(", ", end='')
    print()


def printDigitSum(s):

    digitList = list(int(digit) for digit in s if digit.isdigit())
    digitSum = sum(digitList)

    print("Tổng các chữ số vừa nhập là: ", end='')

    for i in range(len(digitList)):
        print(digitList[i], end='')
        if i < len(digitList) - 1:
            print(" + ", end='')
        else:
            print(" = ", end='')
    print(digitSum, end=' ')

    if isFibonacci(digitSum):
        print("là số Fibonacci")
    else:
        print("không phải là số Fibonacci")


def countChar(s):

    # Đếm số lần xuất hiện của các kí tự
    charCount = {}
    for char in s:
        if char.isalpha():
            if char in charCount:
                charCount[char] += 1
            else:
                charCount[char] = 1

    print("Số lần xuất hiện của các ký tự vừa nhập là: ", end='')
    for char, count in charCount.items():
        print(char, "=", count, end='')
        if char != list(charCount.keys())[-1]:
            print(", ", end='')


def main():
    print("Nhập chuỗi ký tự: ", end='')
    s = input()
    squareNumFind(s)
    printDigitSum(s)
    countChar(s)


if __name__ == "__main__":
    main()
