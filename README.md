# timerz

use setInterval safely in your application

## Usage

### register
```typescript
const timer = new Timer();

timer.addTimer(taskName, { 
    timeout: 1000,
    handler() {
        // do something ...
    }
});
```

### cancel
```typescript
timer.clearTimer(taskName);
```

## Example

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