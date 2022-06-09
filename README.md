# timerz

use setInterval safely in your application

## Usage

#### register
```typescript
const timer = new Timer();

timer.addTimer(taskName, { 
    timeout: 1000,
    handler() {
        // do something ...
    }
});
```

#### cancel
```typescript
timer.clearTimer(taskName);
```

## Example
[![Edit simple-timerz](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/simple-timerz-b2p6ey?autoresize=1&codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.ts&moduleview=1&theme=dark)
```typescript
import { Timer } from 'timerz';

// string | number | symbol
const task1 = Symbol('task'); 

const timer = new Timer();

// register a timer with task1
timer.addTimer(task1, { 
    timeout: 1000, // setInterval timeout: ms
    handler() {
        // do something ...
    }
});

// cancel the timer
timer.clearTimer(task1);
````
