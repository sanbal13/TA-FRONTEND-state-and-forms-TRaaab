function Image(props) {
    let images = ['design', 'sun', 'weed'];
    return <div className="image">
        {<img src={'./images/'+images[props.index]+'.svg'} alt="images[props.index]" />}
    </div>
}

export default Image;