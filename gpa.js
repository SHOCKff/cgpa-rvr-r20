OPERATION=(sub,crd)=>{
    let i=0,tukas;
    len=crd.length
    oldid=['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9','o10']
    while (oldid.length>len) {
      oldid.pop(); 
    };
    console.log(oldid)//setting old id size
    oldid.forEach(ele=> {
    let jar=document.getElementById(ele);
    jar.innerHTML=`<pre>${sub[i]}</pre><select class="common", id="${sub[i]}"><option value=10>A+</option><option value=9>A</option><option value=8>B</option><option value=7>C</option><option value=6>E</option><option value=0>F</option></select>`
    i++;
    });  
    //creating input segment
    let but2=document.getElementById("b2");//2nd button html
    but2.innerHTML="<button id='tukas'>SUBMIT</button>";
    tukas=document.getElementById("b2");
    values=['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8', 'value9','value10']
    while (values.length>len){
      values.pop(); 
    };
    points=[]
    console.log(i)
    i=0;
    tukas.onclick=( )=>{
        values.forEach((Element)=> {
            Element=document.getElementById(`${sub[i]}`).value;
            points.push(Element);
            i++;
           });
        caluclate(points,crd);
   };
   sumcredits=(crd)=>{         //for credits sum
    for (let h=0;h<crd.length;h++){ sm+=crd[h]};
        return sm;
   };
   caluclate=(points,crd)=>{
    console.log(points)//derived for checking...
    console.log(crd)
    let j=0,sum=0;sm=0;total=0;
    points.forEach(p=> {     //for credits*points
    sum+=(p*crd[j]);
    j++
    });
    let sumofcredits=sumcredits(crd);
    console.log(total);
    total=sum/sumofcredits
    console.log(total);
    let res=document.getElementById("res");
    res.innerHTML=`<p>CGPA=<output>${total}</output><p><P>Approximatioin</P>`
    i=0,j=0,sum=0,sm=0,total=0; //CLEARING...
    for(let i=0;i<crd.length;i++)
       {
           points.pop()
       }
  }
  }
let button=document.getElementById("b1");
button.onclick=( )=>{
    let br=document.getElementById("branch");
    let se=document.getElementById("semester");
    let branch=br.value;
    let semester=se.value;
    if(branch=="ece"&&semester=="s1")//sem1-ec
        {let sub=['EC111', 'EC112', 'EC113', 'EC114', 'EC151', 'EC152', 'EC153', 'EC154'];//only changable
        let crd=[3,3,3,3,1.5,1,3,2];//only changable
        OPERATION(sub,crd);
        }
    else if(branch=="ece"&&semester=="s2")//sem2-ec
        {let sub=['EC121', 'EC122', 'EC123', 'EC124', 'EC161', 'EC162', 'EC163', 'EC164']//only changable
        let crd=[3,3,3,3,1.5,2,3,1];//only changable
        OPERATION(sub,crd);
        }
        else if(branch=="ece"&&semester=="s3")//sem3-ec
        {let sub=['EC211', 'EC212', 'EC213', 'EC214', 'EC215', 'EC251', 'EC252', 'EC253', 'ECSL1']//only changable
        let crd=[3,4,3,3,3,1,1.5,1,2];//only changable
        OPERATION(sub,crd);
        }
    else if(branch=="ece"&&semester=="s4")//sem4-ec
        {let sub=['EC221', 'EC222', 'EC223', 'EC224', 'EC225', 'EC261', 'EC262', 'EC263', 'ECSL2']//only changable
        let crd=[3,3,4,3,3,1.5,1,1,2];//only changable
        OPERATION(sub,crd);
        }
    else if(branch=="ece"&&semester=="s5")//sem5-ec
        {let sub=['EC311', 'EC312', 'EC313', 'EC314', 'EC315', 'EC351', 'EC352', 'EC353', 'ECSL3']//only changable
        let crd=[3,3,3,3,3,1.5,2,1.5,2];//only changable
        OPERATION(sub,crd);
        }
    else if(branch=="ece"&&semester=="s6")//sem6-ec
        {let sub=['EC321', 'EC322', 'EC323', 'EC324', 'EC325', 'EC361', 'EC362', 'EC363', 'ECSL4']//only changable
        let crd=[3,3,3,3,3,1.5,1.5,1,2];//only changable
        OPERATION(sub,crd);
        }
    else if(branch=="ece"&&semester=="s7")//sem7-ec
        {let sub=['EC411', 'EC412', 'EC413', 'EC414', 'EC415', 'EC416', 'EC451', 'ECSL5']//only changable
        let crd=[3,3,3,3,3,3,3,2];//only changable
        OPERATION(sub,crd);
        }
    else if(branch=="csm"&&semester=="s1")//sem1-cm
        {let sub=['CM111', 'CM112', 'CM113', 'CM114', 'CM151', 'CM152', 'CM153', 'CM154']//only changable
        let crd=[3,3,3,3,1.5,1.5,3,1.5];//only changable
        OPERATION(sub,crd);
    }
    else if(branch=="csm"&&semester=="s2")//sem2-cm
        {let sub=['CM121', 'CM122', 'CM123', 'CM124', 'CM125', 'CM161', 'CM162', 'CM163', 'CM164']//only changable
        let crd=[3,3,3,3,2,1.5,1.5,1.5,1];//only changable
        OPERATION(sub,crd);
    }
   else if(branch=="csm"&&semester=="s3")//sem3-cm
        {let sub=['CM211', 'CM212', 'CM213', 'CM214', 'CM215', 'CM251', 'CM252', 'CM253', 'CMSL1']//only changable
        let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
        OPERATION(sub,crd);
    }
    else if(branch=="csm"&&semester=="s4")//sem4-cm
        {let sub=['CM221', 'CM222', 'CM223', 'CM224', 'CM225', 'CM261', 'CM262', 'CM263', 'CMSL2']
        //only changable
        let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
        OPERATION(sub,crd);
    }
    else if(branch=="csm"&&semester=="s5")//sem5-cm
        {let sub=['CM311', 'CM312', 'CM313', 'CM314', 'CM315', 'CM351', 'CM352', 'CM353', 'CMSL3']
        //only changable
        let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
        OPERATION(sub,crd);
    }
    else if(branch=="meC"&&semester=="s1")//sem1-me
    {let sub=['ME111', 'ME112', 'ME113', 'ME114', 'ME151', 'ME152', 'ME153', 'ME154']
    //only changable
    let crd=[3,3,3,3,1.5,1.5,3,1.5];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="mec"&&semester=="s2")//sem2-me
    {let sub=['ME121', 'ME122', 'ME123', 'ME124', 'ME125', 'ME161', 'ME162', 'ME163']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="mec"&&semester=="s3")//sem3-me
    {let sub=['ME211', 'ME212', 'ME213', 'ME214', 'ME215', 'ME251', 'ME252', 'ME253', 'MESL1']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="mec"&&semester=="s4")//sem4-me
    {let sub=['ME221', 'ME222', 'ME223', 'ME224', 'ME225', 'ME261', 'ME262', 'ME263', 'MESL2']
    //only changable
    console.log("HII")
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="mec"&&semester=="s5")//sem5-me
    {let sub=['ME311', 'ME312', 'ME313', 'ME314', 'ME315', 'ME351', 'ME352', 'ME353', 'MESL3']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="mec"&&semester=="s6")//sem6-me
    {let sub=['ME321', 'ME322', 'ME323', 'ME325', 'ME325', 'ME361', 'ME362', 'ME363', 'MESL4']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="mec"&&semester=="s7")//sem7-me
    {let sub=['ME411', 'ME412', 'ME413', 'ME414', 'ME415', 'ME416', 'ME451', 'MESL5']//only changable
    let crd=[3,3,3,3,3,3,3,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="che"&&semester=="s1")//sem1-che
    {let sub=['CHE111', 'CHE112', 'CHE113', 'CHE114', 'CHE151', 'CHE152', 'CHE153', 'CHE154', 'CHEMC1'] //only changable
    let crd=[3,3,3,3,1.5,1.5,1.5,3];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="che"&&semester=="s2")//sem2-che
    {let sub=['CHE121', 'CHE122', 'CHE123', 'CHE124', 'CHE161', 'CHE162', 'CHE163', 'CHE164']//only changable
    let crd=[3,3,3,3,1.5,1.5,1.5,3];//only changable
    OPERATION(sub,crd);
    }   
    else if(branch=="che"&&semester=="s3")//sem3-che
    {let sub=['CHE211', 'CHE212', 'CHE213', 'CHE214', 'CHE215', 'CHE251', 'CHE252', 'CHE253', 'CHESL1']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }  
    else if(branch=="che"&&semester=="s4")//sem4-che
    {let sub=['CHE221', 'CHE222', 'CHE223', 'CHE224', 'CHE225', 'CHE261', 'CHE262', 'CHE263', 'CHEL12']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }  
    else if(branch=="che"&&semester=="s5")//sem5-che
    {let sub=['CHE311', 'CHE312', 'CHE313', 'CHE314', 'CHE315', 'CHE351', 'CHE352', 'CHE353', 'CHESL3']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }  
    else if(branch=="che"&&semester=="s6")//sem6-che
    {let sub=['CHE321', 'CHE322', 'CHE323', 'CHE324', 'CHE325', 'CHE361', 'CHE362', 'CHESL4']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }  
    else if(branch=="che"&&semester=="s7")//sem7-che
    {let sub=['CHE411', 'CHE412', 'CHE413', 'CHE414', 'CHE415','CH416', 'CHE451', 'CHE452' ,'CHESL5']//only changable
    let crd=[3,3,3,3,3,3,1.5,3,2];//only changable
    OPERATION(sub,crd);
    }  
    else if(branch=="ce"&&semester=="s1")//sem1-civil
    {let sub=['CE111', 'CE112', 'CE113', 'CE114', 'CE151', 'CE152', 'CE153', 'CE154']//only changable
    let crd=[3,3,3,3,1.5,1.5,3,1.5];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="ce"&&semester=="s2")//sem2-civil
    {let sub=['CE121', 'CE122', 'CE123', 'CE124', 'CE161', 'CE162', 'CE163', 'CES164']//only changable
    let crd=[3,3,3,3,1.5,1.5,3,1.5];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="ce"&&semester=="s3")//sem3-civil
    {let sub=['CE211', 'CE212', 'CE213', 'CE214', 'CE215','CE251', 'CE252', 'CE253','CESL1']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="ce"&&semester=="s4")//sem4-civil
    {let sub=['CE221', 'CE222', 'CE223', 'CE224', 'CE225', 'CE261', 'CE262', 'CE263', 'CESL2']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="ce"&&semester=="s5")//sem5-civil
    {let sub=['CE311', 'CE312', 'CE313', 'CE314', 'CE315','CE351', 'CE352', 'CE353', 'CESL3']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="ce"&&semester=="s6")//sem6-civil
    {let sub=['CE321', 'CE322', 'CE323', 'CE324', 'CE325', 'CE361', 'CE362', 'CE363', 'CESL4']//only changable
    let crd=[3,3,3,3,3,1.5,1.5,1.5,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="ce"&&semester=="s7")//sem7-civil
    {let sub=['CE411', 'CE412', 'CE413', 'CE414', 'CE415','CE416','CE451','CESL5']//only changable
    let crd=[3,3,3,3,3,3,3,2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s1")//sem1-eee
    {let sub=['EE111', 'EE112', 'EE113', 'EE114', 'EE151', 'EE152', 'EE153', 'EE154']//only changable
    let crd=[3, 3, 3, 3, 1.5, 1.5, 3, 1.5];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s2")//sem2-eee
    {let sub=['EE121', 'EE122', 'EE123', 'EE123', 'EE161', 'EE162', 'EE163', 'EE164']//only changable
    let crd=[3, 3, 3, 3, 1.5, 1.5, 3, 1.5];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s3")//sem3-eee
    {let sub=['EE211', 'EE212', 'EE213', 'EE214', 'EE215', 'EE251', 'EE252', 'EE253', 'EESL1']//only changable
    let crd=[3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s4")//sem4-eee
    {let sub=['EE221', 'EE222', 'EE223', 'EE224', 'EE225', 'EE261', 'EE262', 'EE263', 'EESL2']//only changable
    let crd=[3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s5")//sem5-eee
    {let sub=['EE311', 'EE312', 'EE313', 'EE314', 'EE315', 'EE351', 'EE352', 'EE353', 'EESL3']//only changable
    let crd=[3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s6")//sem6-eee
    {let sub=['EE321', 'EE322', 'EE323', 'EE324', 'EE325', 'EE361', 'EE362', 'EE363', 'EESL4']//only changable
    let crd=[2, 3, 3, 3, 3, 3, 1.5, 1, 2];//only changable
    OPERATION(sub,crd);
    }
    else if(branch=="eee"&&semester=="s7")//sem7-eee
    {let sub=['EE411', 'EE412', 'EE413', 'EE414', 'EE415', 'EE416', 'EE451', 'EESL5']//only changable
    let crd=[3, 3, 3, 3, 3, 3, 3, 2];//only changable
    OPERATION(sub,crd);
    }
    else{
        el=document.getElementById("o1");
        el.innerText='under construction'
    }
}







