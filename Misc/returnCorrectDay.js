function returnCorrectDay(dayOfWeek, K) {
   let daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

   let indexOfDay = daysOfWeek.indexOf(dayOfWeek);
   let newIndex = (indexOfDay + K) % daysOfWeek.length;
   return daysOfWeek[newIndex];
}