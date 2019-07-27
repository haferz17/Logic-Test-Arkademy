function str_split(a){
    let x = ['pro','gram','merit','program','it','programmer']
    let c='',e=''
    for(let b=0;b<a.length;b++){
        c += a[b]
        for(let d=0;d<x.length;d++){
            if(c==x[d]){
                e += x[d]+' '
                c = ''
            }
        }
    }
    console.log(e);
}
str_split("programit");