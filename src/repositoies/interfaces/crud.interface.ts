export interface ICrudRepository<T, CreateDto, UpdateDto, R = void> {
  create(createDto: CreateDto): Promise<R | void>
  get(id: string | number): Promise<T>
  getAll(): Promise<T[]>
  update(id: string | number, updateDto: UpdateDto): Promise<void>
  delete(id: string | number): Promise<void>
}
