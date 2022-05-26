const basePath = `example/`;
const language = "en";
const pageMataObj = {
  "common-title": { en: "This is hello world", bn: "", span: "" },
  "A-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "B-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "C-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "D-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "E-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "F-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "G-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "H-010-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "og-title": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "og-description": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
  "og-type": {
    en: "Lorem Ipsum is simply dummy text of the printing",
    bn: "",
    span: "",
  },
};
const pagePathListObj = {
  "A-010": { path: "/dummy", isLoading: true },
  "B-010": { path: "/dummy", isLoading: false },
  "C-010": { path: "/dummy", isLoading: false },
  "D-010": { path: "/dummy", isLoading: true },
  "E-010": { path: "/dummy", isLoading: false },
  "F-010": { path: "/dummy", isLoading: false },
  "G-010": { path: "/dummy", isLoading: false },
  "H-010": { path: "/dummy", isLoading: false },
};
const recommendPageListObj = {
  "A-010": [],
  "B-010": [],
  "C-010": ["A-010", "B-010"],
  "E-010": [],
  "F-010": ["E-010", "G-010", "H-010"],
  "G-010": ["F-010", "G-010"],
  "H-010": ["E-010", "F-010", "G-010"],
};
const commitmentPageObj = {
  "A-010": "",
  "B-010": "",
  "C-010": "",
  "E-010": "E-010",
  "F-010": "E-010",
  "G-010": "F-010",
  "H-010": "G-010",
};

const convertObjFormet = (inputObj) => {
  const convertedObj = {};
  Object.keys(inputObj).forEach((key) => {
    const splitted = key.split("-"); // Split string to array.
    if (splitted.length < 2) {
      console.warn(`invalid key ${key} is in object.`);
      return;
    }

    const subKey = splitted.pop(); // Remove array value from last side.
    const id = splitted.join("-"); // Join array value
    if (!convertedObj[id]) {
      convertedObj[id] = {}; // Create new object key
    }
    convertedObj[id][subKey] = inputObj[key][language]; // create object value base on newly created object key.
  });
  return convertedObj; // return full converted object.
};

const createPageObj = (pageListObj, recommendObj, commitmentObj) => {
  const convertedPageObj = {};
  Object.keys(pageListObj).forEach((key) => {
    const particularItem = {
      ...pageListObj[key],
      recommend: recommendObj[key] || [],
      commitment: commitmentObj[key] || [],
    };
    convertedPageObj[key] = particularItem;
  });
  return convertedPageObj;
};

const getPageRoutes = () => {
  return Object.keys(convertedPageData)
    .filter((id) => !convertedPageData[id].isLoading)
    .map((id) => {
      const { path, others } = convertedPageData[id];
      return {
        path,
        getData: {
          id,
          path: `${basePath}`,
          title: (convertedMataObje[id] && convertedMataObje[id].title) || "",
          ...others,
        },
      };
    });
};

const convertedPageData = createPageObj(
  pagePathListObj,
  recommendPageListObj,
  commitmentPageObj
);
const convertedMataObje = convertObjFormet(pageMataObj);

console.log("Page ", convertedPageData);
console.log("Mata ", convertedMataObje);
console.log(getPageRoutes());
