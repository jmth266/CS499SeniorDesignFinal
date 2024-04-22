function Formula({
    formulaName = "Formula",
    numericFields = [],
    toggleFields = [],
    onCalculate,
}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate();
    };

    return (
        <div className={"container mb-5 center"}>
            <h2 className="text-xl page-header mt-3 mb-3">{formulaName}</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    {/* Render Toggle Fields */}
                    {/* {toggleFields.length > 0 && (
                        <div>
                            {toggleFields.map((field, index) => (
                                <div key={index}>{field}</div>
                            ))}
                        </div>
                    )} */}
                          <div>
        {toggleFields}
      </div>
                    {/* Render Numeric Fields */}
                    {numericFields.length > 0 && (
                        <div>
                            {numericFields.map((field, index) => (
                                <div key={index}>{field}</div>
                            ))}
                        </div>
                    )}
                    <button className="btn btn-primary mt-4">Calculate</button>
                </div>
            </form>
        </div>
    );
}

export default Formula;
