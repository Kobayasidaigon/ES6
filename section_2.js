

//constは後から変更できない
const nums = [1,2,3,4]

function appendNum(users){
    nums = users.map(function(user){
        return nums = user.num;
    });
}

//appendNum({num:10});
nums;

//同じスコープ内で変数定義できない
//{}：ブロック単位でスコープをわけることができる
let x = 1;
{
    let x =2;
    x;
}
x;
