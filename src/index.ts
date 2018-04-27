let i: number = 0;

const timedCount = (): void => {
    i = i + 1;
    postMessage(i);
    setTimeout(timedCount,500);
};

timedCount();
