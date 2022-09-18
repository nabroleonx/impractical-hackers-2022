export const data = {
  javascript: [
    
    "const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object",
    "const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2))",
  ],

  java: [
    'IntStream.rangeClosed(1, 4).mapToObj(i -> MessageFormat.format("Happy Birthday {0}", (i == 3) ? "dear NAME" : "to You")).forEach(System.out::println);',
    "LinkedList<Integer> nums = new LinkedList<>(IntStream.rangeClosed(2, 1000).boxed().collect(Collectors.toList()));",
    "IntStream.rangeClosed(2, Double.valueOf(Math.sqrt(nums.getLast())).intValue()).forEach(n -> nums.removeIf(i -> i % n == 0 && n != i));",
    'IntStream.rangeClosed(1, 100).forEach(i -> System.out.println((i % 3 == 0) ? ((i % 5 == 0) ? "FizzBuzz" : "Fizz") : (i % 5 == 0) ? "Buzz" : i));',
    "Map<Boolean, List<Integer>> passedFailedMap = Stream.of(49, 58, 76, 82, 88, 90).collect(Collectors.partitioningBy(i -> i > 60));",
  ],

  python: [
    
    "const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2))",

    "list(filter(lambda x:all(x % y != 0 for y in range(2, x)), range(2, 13)))",

    "lis = list(map(int, input().split()))",

    "for j in range(C): a.append(int(input()))",

    "reduce( (lambda r,x: r-set(range(x**2,n,x)) if (x in r) else r), range(2,int(n**0.5)), set(range(2,n)))",
  ],
};
