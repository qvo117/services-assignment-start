export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  incrementActiveToInactiveCount() {
    this.activeToInactiveCount++;
    console.log("activeToInactiveCount", this.activeToInactiveCount);
  }

  incrementInactiveToActiveCount() {
    this.inactiveToActiveCount++;
    console.log("inactiveToActiveCount", this.inactiveToActiveCount);
  }
}
