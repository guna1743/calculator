document.querySelector('#sub').addEventListener('click', () => {
    let res, ans, gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10, num, den;

    let msg;
    let cc1 = document.querySelector('#onecc').value;
    let l1 = document.querySelector('#onel').value;
    let cc1_res = parseFloat(cc1);
    let cc2 = document.querySelector('#twocc').value;
    let l2 = document.querySelector('#twol').value;
    let cc2_res = parseFloat(cc2);
    let cc3 = document.querySelector('#threecc').value;
    let l3 = document.querySelector('#threel').value;
    let cc3_res = parseFloat(cc3);
    let cc4 = document.querySelector('#fourcc').value;
    let l4 = document.querySelector('#fourl').value;
    let cc4_res = parseFloat(cc4);
    let cc5 = document.querySelector('#fivecc').value;
    let l5 = document.querySelector('#fivel').value;
    let cc5_res = parseFloat(cc5);
    let cc6 = document.querySelector('#sixcc').value;
    let l6 = document.querySelector('#sixl').value;
    let cc6_res = parseFloat(cc6);
    let cc7 = document.querySelector('#sevencc').value;
    let l7 = document.querySelector('#sevenl').value;
    let cc7_res = parseFloat(cc7);
    let cc8 = document.querySelector('#eightcc').value;
    let l8 = document.querySelector('#eightl').value;
    let cc8_res = parseFloat(cc8);
    let cc9 = document.querySelector('#ninecc').value;
    let l9 = document.querySelector('#ninel').value;
    let cc9_res = parseFloat(cc9);
    let cc10 = document.querySelector('#tencc').value;
    let l10 = document.querySelector('#tenl').value;
    let cc10_res = parseFloat(cc10);


    switch (l1) {
        case 'O':
            gp1 = parseFloat(10);
            break;
        case 'A+':
            gp1 = parseFloat(9);
            break;
        case 'A':
            gp1 = parseFloat(8);
            break;
        case 'B+':
            gp1 = parseFloat(7);
            break;
        case 'B':
            gp1 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc1_res = cc1_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc1_res = cc1_res + NaN;
            break;
    }



    switch (l2) {
        case 'O':
            gp2 = parseFloat(10);
            break;
        case 'A+':
            gp2 = parseFloat(9);
            break;
        case 'A':
            gp2 = parseFloat(8);
            break;
        case 'B+':
            gp2 = parseFloat(7);
            break;
        case 'B':
            gp2 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear"
            cc2_res = cc2_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc2_res = cc2_res + NaN;
            break;
    }


    switch (l3) {
        case 'O':
            gp3 = parseFloat(10);
            break;
        case 'A+':
            gp3 = parseFloat(9);
            break;
        case 'A':
            gp3 = parseFloat(8);
            break;
        case 'B+':
            gp3 = parseFloat(7);
            break;
        case 'B':
            gp3 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc3_res = cc3_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc3_res = cc3_res + NaN;
            break;
    }


    switch (l4) {
        case 'O':
            gp4 = parseFloat(10);
            break;
        case 'A+':
            gp4 = parseFloat(9);
            break;
        case 'A':
            gp4 = parseFloat(8);
            break;
        case 'B+':
            gp4 = parseFloat(7);
            break;
        case 'B':
            gp4 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc4_res = cc4_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc4_res = cc4_res + NaN;
            break;
    }


    switch (l5) {
        case 'O':
            gp5 = parseFloat(10);
            break;
        case 'A+':
            gp5 = parseFloat(9);
            break;
        case 'A':
            gp5 = parseFloat(8);
            break;
        case 'B+':
            gp5 = parseFloat(7);
            break;
        case 'B':
            gp5 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc5_res = cc5_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc5_res = cc5_res + NaN;
            break;
    }


    switch (l6) {
        case 'O':
            gp6 = parseFloat(10);
            break;
        case 'A+':
            gp6 = parseFloat(9);
            break;
        case 'A':
            gp6 = parseFloat(8);
            break;
        case 'B+':
            gp6 = parseFloat(7);
            break;
        case 'B':
            gp6 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc6_res = cc6_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc6_res = cc6_res + NaN;
            break;
    }


    switch (l7) {
        case 'O':
            gp7 = parseFloat(10);
            break;
        case 'A+':
            gp7 = parseFloat(9);
            break;
        case 'A':
            gp7 = parseFloat(8);
            break;
        case 'B+':
            gp7 = parseFloat(7);
            break;
        case 'B':
            gp7 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc7_res = cc7_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc7_res = cc7_res + NaN;
            break;
    }

    switch (l8) {
        case 'O':
            gp8 = parseFloat(10);
            break;
        case 'A+':
            gp8 = parseFloat(9);
            break;
        case 'A':
            gp8 = parseFloat(8);
            break;
        case 'B+':
            gp8 = parseFloat(7);
            break;
        case 'B':
            gp8 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc8_res = cc8_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc8_res = cc8_res + NaN;
            break;
    }

    switch (l9) {
        case 'O':
            gp9 = parseFloat(10);
            break;
        case 'A+':
            gp9 = parseFloat(9);
            break;
        case 'A':
            gp9 = parseFloat(8);
            break;
        case 'B+':
            gp9 = parseFloat(7);
            break;
        case 'B':
            gp9 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc9_res = cc9_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc9_res = cc9_res + NaN;
            break;
    }

    switch (l10) {
        case 'O':
            gp10 = parseFloat(10);
            break;
        case 'A+':
            gp10 = parseFloat(9);
            break;
        case 'A':
            gp10 = parseFloat(8);
            break;
        case 'B+':
            gp10 = parseFloat(7);
            break;
        case 'B':
            gp10 = parseFloat(6);
            break;
        case 'RA':
            msg = "To Reappear";
            cc10_res = cc10_res + NaN;
            break;
        case 'WH':
            msg = "With held";
            cc10_res = cc10_res + NaN;
            break;
    }



    if (isNaN(cc1_res)) {
        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        } else {
            ans = "At least one is needed to calculate GPA!!";
        }

        document.querySelector('.cgpacalc_output h3').innerHTML = `${ans}`;

    } else if (isNaN(cc2_res)) {

        let num = parseFloat((cc1 * gp1));
        let den = parseFloat(cc1_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }



        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;

    } else if (isNaN(cc3_res)) {

        let num = parseFloat((cc1 * gp1) + (cc2 * gp2));
        let den = parseFloat(cc1_res + cc2_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }


        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    }
    else if (isNaN(cc4_res)) {
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3));
        let den = parseFloat(cc1_res + cc2_res + cc3_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }


        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    }
    else if (isNaN(cc5_res)) {
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3) + (cc4 * gp4));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }

        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    } else if (isNaN(cc6_res)) {
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3) + (cc4 * gp4) + (cc5 * gp5));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res + cc5_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }


        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    }
    else if (isNaN(cc7_res)) {
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3) + (cc4 * gp4) + (cc5 * gp5) + (cc6 * gp6));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res + cc5_res + cc6_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }


        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    } else if (isNaN(cc8_res)) {
        let num = parseFloat((cc1_res * gp1) + (cc2_res * gp2) + (cc3_res * gp3) + (cc4_res * gp4) + (cc5_res * gp5) + (cc6_res * gp6) + (cc7_res * gp7));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res + cc5_res + cc6_res + cc7_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);


        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }

        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    } else if (isNaN(cc9_res)) {
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3) + (cc4 * gp4) + (cc5 * gp5) + (cc6 * gp6) + (cc7 * gp7) + (cc8 * gp8));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res + cc5_res + cc6_res + cc7_res + cc8_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }

        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    } else if (isNaN(cc10_res)) {
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3) + (cc4 * gp4) + (cc5 * gp5) + (cc6 * gp6) + (cc7 * gp7) + (cc8 * gp8) + (cc9 * gp9));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res + cc5_res + cc6_res + cc7_res + cc8_res + cc9_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        ans = res.toPrecision(3);


        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }

        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    } else {
        //let num = parseFloat((cc1_res * gp1) + (cc2_res * gp2) + (cc3_res * gp3) + (cc4_res * gp4) + (cc5_res * gp5) + (cc6_res * gp6) + (cc7_res * gp7) + (cc8_res * gp8) + (cc9_res * gp9) + (cc10_res + gp10))
        let num = parseFloat((cc1 * gp1) + (cc2 * gp2) + (cc3 * gp3) + (cc4 * gp4) + (cc5 * gp5) + (cc6 * gp6) + (cc7 * gp7) + (cc8 * gp8) + (cc9 * gp9) + (cc10 * gp10));
        let den = parseFloat(cc1_res + cc2_res + cc3_res + cc4_res + cc5_res + cc6_res + cc7_res + cc8_res + cc9_res + cc10_res);
        res = parseFloat(num / den);
        console.log(num);
        console.log(den);
        console.log(res);
        console.log(isNaN(cc10_res));
        ans = res.toPrecision(3);

        if (msg == "To Reappear") {
            ans = msg;
        } else if (msg == "With held") {
            ans = msg;
        }


        document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
    }





    // console.log(num);
    // console.log(den);
    // console.log(res);
    // ans = res.toPrecision(3);



    // document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : ${ans}`;
})

document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.cgpacalc_output h3').innerHTML = `GPA : `;
    //document.querySelector('#first').value = '';
    document.querySelector('#onecc').value = '';
    document.querySelector('#onel').value = '';
    document.querySelector('#twocc').value = '';
    document.querySelector('#twol').value = '';
    document.querySelector('#threecc').value = '';
    document.querySelector('#threel').value = '';
    document.querySelector('#fourcc').value = '';
    document.querySelector('#fourl').value = '';
    document.querySelector('#fivecc').value = '';
    document.querySelector('#fivel').value = '';
    document.querySelector('#sixcc').value = '';
    document.querySelector('#sixl').value = '';
    document.querySelector('#sevencc').value = '';
    document.querySelector('#sevenl').value = '';
    document.querySelector('#eightcc').value = '';
    document.querySelector('#eightl').value = '';
    document.querySelector('#ninecc').value = '';
    document.querySelector('#ninel').value = '';
    document.querySelector('#tencc').value = '';
    document.querySelector('#tenl').value = '';
    document.querySelector('#code1').value = '';
    document.querySelector('#code2').value = '';
    document.querySelector('#code3').value = '';
    document.querySelector('#code4').value = '';
    document.querySelector('#code5').value = '';
    document.querySelector('#code6').value = '';
    document.querySelector('#code7').value = '';
    document.querySelector('#code8').value = '';
    document.querySelector('#code9').value = '';
    document.querySelector('#code10').value = '';
    document.querySelector('#name1').value = '';
    document.querySelector('#name2').value = '';
    document.querySelector('#name3').value = '';
    document.querySelector('#name4').value = '';
    document.querySelector('#name5').value = '';
    document.querySelector('#name6').value = '';
    document.querySelector('#name7').value = '';
    document.querySelector('#name8').value = '';
    document.querySelector('#name9').value = '';
    document.querySelector('#name10').value = '';
})







// let cc2 = document.querySelector('#twocc').value;
//     let gp2 = document.querySelector('#twogp').value;
//     let cc2_res = parseFloat(cc2);
//     // let gp2_res = parseFloat(gp2);


//     let cc3 = document.querySelector('#threecc').value;
//     let gp3 = document.querySelector('#threegp').value;
//     let cc3_res = parseFloat(cc3);

//     let cc4 = document.querySelector('#fourcc').value;
//     let gp4 = document.querySelector('#fourgp').value;
//     let cc4_res = parseFloat(cc4);
//     ;

//     let cc5 = document.querySelector('#fivecc').value;
//     let gp5 = document.querySelector('#fivegp').value;
//     let cc5_res = parseFloat(cc5);

//     let cc6 = document.querySelector('#sixcc').value;
//     let gp6 = document.querySelector('#sixgp').value;
//     let cc6_res = parseFloat(cc6);


//     let cc7 = document.querySelector('#sevencc').value;
//     let gp7 = document.querySelector('#sevengp').value;
//     let cc7_res = parseFloat(cc7);

//     console.log(cc7_res);
//     console.log(gp7_res);
//     let cc8 = document.querySelector('#eightcc').value;
//     let gp8 = document.querySelector('#eightgp').value;
//     let cc8_res = parseFloat(cc8);