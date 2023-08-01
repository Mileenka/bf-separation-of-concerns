const updateColor = (element, value) => {
    element.Style.backgroundColor = value;
    const body = document.body;
    updateColor(body, value);
}

export default updateColor;