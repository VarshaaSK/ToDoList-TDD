const mockData = {
    data : {
        results : [
            {
                name : Sample
            }
        ]
    }
}

export default {
    get : jest.fn().mockResolvedValue(mockData)
}