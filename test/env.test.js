test(' Environment variables must be declared before the service start ', () => {

    const clientId = process.env['CLIENT_ID'];
    const clientSecret = process.env['CLIENT_SECRET'];

    expect(clientId).not.toBe("");
    expect(clientSecret).not.toBe("");

})