class Trip {
  constructor(id, destinationID, travelers, date, duration) {
    this.id = Date.now();
    this.userID = id;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date
    this.duration = duration;
    this.status = 'pending'
    this.suggestedActivities = []
  }
}

export default Trip