function displayGanttChart(processes) {
    let noOfProcesses = 0, sumTAT = 0, sumWT = 0;
    console.log("PID  AT  BT  TAT  WT");
    for (let process of processes) {
        const [pid, arrTime, burstTime, TAT, WT] = process;
        console.log(` ${pid}   ${arrTime}   ${burstTime}   ${TAT}   ${WT}`);
        noOfProcesses++;
        sumTAT+=TAT;
        sumWT+=WT;
    }
    console.log(`Average Waiting Time: ${sumTAT/noOfProcesses}`);
    console.log(`Average Turn Around Time: ${sumWT/noOfProcesses}`);
}

processes = [
    [1, 0, 4, 4, 4],
    [2, 0, 4, 8, 8],
    [3, 0, 4, 12, 12],
    [4, 0, 4, 16, 16]
];

displayGanttChart(processes);