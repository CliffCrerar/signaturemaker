

export default function (formData) {

    const imgFile = formData.get('imgFile');

    this.designation = formData.get('designation');
    this.website = formData.get('website');
    // this.imgFile = 
    this.email = formData.get('email');
    this.name = formData.get('name');
    this.imgAlt = imgFile.name;
    this.imgSource = '';
    
    ( () => {
        if (!imgFile) {
            throw new Error('imgFile Not Defined');
        }
        const mimeType = imgFile.type;
        imgFile.arrayBuffer()
            .then(buf => {
                const bts = Buffer.from(buf).toString('base64');
                this.imgSource = `data:${mimeType};base64,${bts}`;
            })
    })()
} 