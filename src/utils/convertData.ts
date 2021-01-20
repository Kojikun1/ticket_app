export default function convertDate(data: Date){
      let day = data.getDate();
      let month = data.getMonth() + 1;
      let year = data.getFullYear();
      let pMonth = month < 10 ? `0${month}` : `${month}`
      return `${day}/${pMonth}/${year}`;
}