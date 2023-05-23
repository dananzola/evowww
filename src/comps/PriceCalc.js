import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [t, setT] = useState(0);
    const [m, setM] = useState(0);
    const [s, setS] = useState(0);
    const [lp, setLp] = useState(0);
    const [sub, setSub] = useState(0);
    const [profit, setProfit] = useState(0);
    const [labor, setLabor] = useState(0);
    const [total, setTotal] = useState(0);
    const wage = 25;

    const markUp = (m, s) => {
        const result = (m / 100).toFixed(2);
        const multipliedValue = (result * s).toFixed(2);
        return multipliedValue;
    };

    useEffect(() => {
        const calculatedLabor = ((lp / 100) * wage).toFixed(2);
        const newSub = parseFloat(markUp(m, s)) + parseFloat(s);
        const newTotal = (
            parseFloat(newSub) +
            parseFloat(t) +
            parseFloat(calculatedLabor)
        ).toFixed(2);
        const calculatedProfit = (parseFloat(calculatedLabor) + sub / 2).toFixed(2);

        // Check if the result is NaN or invalid
        if (isNaN(newTotal) || isNaN(parseFloat(newTotal))) {
            setTotal(0);
        } else {
            setTotal(parseFloat(newTotal));
        }
        if (isNaN(calculatedProfit)) {
            setProfit("0");
        } else {
            setProfit(calculatedProfit);
        }
        setLabor(calculatedLabor);
        setSub(newSub.toFixed(2)); // Fix newSub to 2 decimal places
    }, [t, m, s, lp, sub]);

    const handleTChange = (e) => {
        const value = parseFloat(e.target.value);
        setT(value || value === 0 ? value : '');
    };

    const handleMChange = (e) => {
        const value = parseFloat(e.target.value);
        setM(value || value === 0 ? value : '');
    };

    const handleSChange = (e) => {
        const value = parseFloat(e.target.value);
        setS(value || value === 0 ? value : '');
    };

    const handleLpChange = (e) => {
        const value = parseFloat(e.target.value);
        setLp(value || value === 0 ? value : '');
    };

    return (
        <div className="container col-12">
            <h2 className="span-angle">Profulator</h2>
            <div style={{ width: '200px' }} className="rounded" id="transBG">
                <div className="result">
                    <div>
                        Price: <h3><strong style={{ color: 'rgba(110, 170, 200, 1)' }}>${total.toFixed(2)}</strong></h3>
                    </div>
                    <div>
                        Profit: <strong style={{ color: 'green' }}>${profit}</strong>
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <label htmlFor="sInput">Cost ($):</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control transBG"
                        id="sInput"
                        value={s === 0 ? '' : s}
                        onChange={handleSChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tInput">Dispensables ($):</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control transBG"
                        id="tInput"
                        value={t === 0 ? '' : t}
                        onChange={handleTChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mInput">Mark-Up (%):</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="form-control transBG"
                        id="mInput"
                        value={m}
                        onChange={handleMChange}
                    />
                    <span>{m}% ${sub ? (sub / 2).toFixed(2) : ''}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="lpInput">Labor (%):</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="form-control transBG"
                        id="lpInput"
                        value={lp}
                        onChange={handleLpChange}
                    />
                    <span>{lp}% ${labor || ''}</span>
                </div>
            </div>
        </div>
    );
};

export default Calculator;








/*let t = 2;
let m = 2;
let calcl = () => {
    let l = 0.33 * 25;
    return l;
};
let calcs = (m) => {
    let s = 7 * m;
    return s;
};

const Total = (s, t, m, l) => {
    const sum = s(m) * m + t + l();
    return sum;
};

const result = Total(calcs, t, m, calcl);
console.log(result);*/