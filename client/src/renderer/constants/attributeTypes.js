export const djangoAttributeTypes = [
    {
        description: 'String of Variable Length; max_length: maximum number of characters; blank: whether the string is allowed to be blank',
        value: 'CharField(max_length=100, blank=True)'
    },
    {
        description: 'String of Variable Length <= 100, can not be blank',
        value: 'CharField(max_length=100, blank=False)'
    },
    {
        description: 'Integer',
        value: 'IntegerField()'
    },
    {
        description: 'A foreign key to another class; Replace <NameOfClass> with your target class; on_delete: model.[CASCADE | PROJECT | SET_NULL | SET_DEFAULT ...]',
        value: 'ForeignKey(<NameOfClass>, on_delete=models.CASCADE)'
    }
]