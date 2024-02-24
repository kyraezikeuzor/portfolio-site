export function capitalizeFirstLetter(text:string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getPath(text:string) {
  let finalString = "/" + text.toLowerCase().replaceAll(" ", "-");
  return finalString;
}

export function getDate(date:any) {
    const d = new Date(date).toLocaleDateString("en-US");
    return d;
  }
  
export function getBool(bool:boolean) {
  return Boolean(bool) == true ? "Yes" : "No";
}
  
  
export function handleViewChange(componentName, setComponent, componentList) {
  for (let i = 0; i < componentList.length; i++) {
    if (componentList[i].name == componentName) {
      return setComponent(componentList[i].component);
    }
  }
}
  
