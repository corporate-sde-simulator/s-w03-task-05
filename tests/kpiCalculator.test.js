const KpiCalculator = require("../src/kpiCalculator.js");
const DataAggregator = require("../src/dataAggregator.js");

describe("Dashboard KPI calculator service", () => {
    test("should process valid input", () => {
        const obj = new KpiCalculator();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new KpiCalculator();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new KpiCalculator();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new DataAggregator();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
