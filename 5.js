function str_split(a){
    let x = ['pro','gram','merit','program','it','programmer']
    let c='',e='',f=[]
    for(let l=0;l<2;l++){

    
    for(let b=0;b<a.length;b++){
        c += a[b]
        console.log(c)
        for(let d=0;d<x.length;d++){
            if(c==x[d]){
                e += x[d]+' '
                
                f.push(x[d])
                c = ''
            }
        }
        
    }
}
    console.log(e);
    console.log(f);
}
str_split("programit");