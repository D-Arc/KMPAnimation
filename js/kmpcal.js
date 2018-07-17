class KmpCal {

    //使用generator输出两个串的指针位置
    static *kmpAlg(ts, ps) {
        let t = ts.split('');
        let p = ps.split('');
        let i = 0; // 主串的位置
        let j = 0; // 模式串的位置
        let next = this.getNext(ps);
        while (i < t.length && j < p.length) {
            if (j == -1 || t[i] == p[j]) { // 当j为-1时，要移动的是i，当然j也要归0
                i++;
                j++;
                //生成指针位置的index数组
                yield [i, j];
            } else {
                // i不需要回溯了
                // i = i - j + 1;
                j = next[j]; // j回到指定位置
            }
        }

        if (j == p.length) {
            return i - j;
        } else {
            return -1;
        }
    }

    static getNext(ps) {
        let p = ps.split('');
        let next = new Array(ps.length).fill(0);
        next[0] = -1;
        let j = 0;//子串下标
        let k = -1;//j(子串指针)需要回溯到的位置，-1就是移动i(父串)

        while (j < p.length - 1) {
            if (k == -1 || p[j] == p[k]) {
                if (p[++j] == p[++k]) { // 当两个字符相等时要跳过
                    next[j] = next[k];
                } else {
                    next[j] = k;
                }
            } else {
                k = next[k];
            }
        }
        return next;
    }
}



