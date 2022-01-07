
# REST Fizzbuzz

A small api which returns a fizzbuzz array using NodeJS Express. 


## API Reference

#### Get a fizzbuzz array

```http
  GET /*
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `count` | `number` | The number of elements in the array. *defaults to 100* |
| `onFive` | `string` | The string to be printed when a number is divisible by 5. *defaults to buzz* |
| `onThree` | `string` | The string to be printed when a number is divisible by 3. *defaults to fizz* |
| `onBoth` | `string` | The string to be printed when a number is divisible by 5 and 3. *defaults to fizzbuzz* |

**Example**

```http
  GET /?count=15&onThree=fizzy
```
**Returns**
```javascript
[1,2,"fizzy",4,"buzz","fizzy",7,8,"fizzy","buzz",11,"fizzy",13,14,"fizzbuzz"]
```

