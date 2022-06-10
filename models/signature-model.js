

export default function (formData) {

    const imgFile = formData.get('imgFile');

    this.designation = formData.get('designation');
    this.website = formData.get('website');
    this.email = formData.get('email');
    this.name = formData.get('name');
    this.phone = formData.get('phone');
    this.imgAlt = imgFile.name;
    this.imgSrc = '';

    return new Promise((resolve,reject)=>{
        if (!imgFile) {
            reject( Error('imgFile Not Defined'));
        }
        const mimeType = imgFile.type;
        imgFile.arrayBuffer()
            .then(buf => {
                const bts = Buffer.from(buf).toString('base64');
                this.imgSrc = `data:${mimeType};base64,${bts}`;
                resolve(this);
            })
    })

} 