function renderStars(rating) {
  const stararray = rating.split(".");
  console.log(stararray);
  const fullStars = stararray[0];
  const hasHalfStar = stararray[1] === "5" ? true : false;
  const stars = [];

  // Render full stars
  for (let i = hasHalfStar ? 1 : 0; i <= fullStars - 1; i++) {
    stars.push(`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z" fill="#FFC633"/>
        </svg>
      `);
  }

  // Render half star if applicable
  if (hasHalfStar) {
    stars.push(`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z" fill="#FFC633"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M8.8487 0.255127L11.4679 5.89504L17.6412 6.64322L13.0867 10.8771L14.2827 16.9794L8.8487 13.9561L3.41466 16.9794L4.61073 10.8771L0.0562391 6.64322L6.22949 5.89504L8.8487 0.255127Z" fill="#FFC633" style="clip-path: inset(0 50% 0 0)"/>
        </svg>
      `);
  }
  return stars.join("");
}
export { renderStars };
