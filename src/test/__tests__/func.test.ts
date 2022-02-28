function filter (callback: any, array: number[]) {
  const result: number[] = []
  array.forEach((item) => {
    if (callback(item)) {
      result.push(item)
    }
  })
  return result
}

describe('test mock func', () => {
  test('', () => {
    const array = [1, 2, 3, 4, 5]
    const callback = jest.fn()
    callback.mockReturnValue(true)
    const result = filter(callback, array)

    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(1)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  test('', () => {
    const array = [1, 2, 3, 4, 5]
    const callback = jest.fn()
    callback.mockReturnValueOnce(true).mockReturnValueOnce(true)
    const result = filter(callback, array)
    expect(result).toEqual([1, 2])
  })
})
