// export const fetchData = async (url, locale) => {
//   return fetch(`${process.env.API_URL}/${url}`, {
//     method: "GET",
//     headers: new Headers({
//       "api-token": `${process.env.API_KEY}`,
//       lang: locale,
//       "Content-Type": "application/json",
//       Accept: "application/json, text/plain, */*",
//       "User-Agent": "*",
//     }),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// export const fetchDataPublic = async (url, locale) => {
//   return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
//     method: "GET",
//     headers: new Headers({
//       "api-token": `${process.env.NEXT_PUBLIC_API_KEY}`,
//       lang: locale,
//     }),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// export const fetchUserData = async (url, locale, userHash) => {
//   return fetch(`${process.env.API_URL}/${url}`, {
//     method: "GET",
//     headers: new Headers({
//       "api-token": `${process.env.API_KEY}`,
//       lang: locale,
//       user: userHash,
//     }),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// export const postDataPublic = async (url, locale, body) => {
//   return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
//     method: "POST",
//     body: body,
//     headers: new Headers({
//       "api-token": `${process.env.NEXT_PUBLIC_API_KEY}`,
//       lang: locale,
//     }),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// export const postUserDataPublic = async (url, locale, userHash, body) => {
//   return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
//     method: "POST",
//     body: body,
//     headers: new Headers({
//       "api-token": `${process.env.NEXT_PUBLIC_API_KEY}`,
//       lang: locale,
//       user: userHash,
//     }),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
