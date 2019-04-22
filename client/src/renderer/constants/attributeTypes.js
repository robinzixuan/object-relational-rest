// See https://docs.djangoproject.com/en/2.2/ref/models/fields/
export const djangoAttributeTypes = [
    {
        description: 'A foreign key to another class; Replace <NameOfClass> with your target class; on_delete: model.[CASCADE | PROJECT | SET_NULL | SET_DEFAULT ...]',
        value: 'ForeignKey(<NameOfClass>, on_delete=models.CASCADE)'
    },
    {
        description: 'Similar to foreign key, see Django documentation',
        value: 'ManyToManyField(<NameOfClass>)'
    },
    {
        description: 'Similar to foreign key, see Django documentation',
        value: 'OneToOneField(<NameOfClass>, on_delete=models.CASCADE)'
    },
    {
        description: 'String of Variable Length (VARCHAR); max_length: maximum number of characters; blank: whether the string is allowed to be blank',
        value: 'CharField(max_length=100, blank=True, null=False)'
    },
    {
        description: 'A large text field',
        value: 'TextField()'
    },
    {
        description: 'Integer',
        value: 'IntegerField()'
    },
    {
        description: 'Boolean',
        value: 'BooleanField()'
    },
    {
        description: 'Date and Time; auto_now: Automatically set the field to now every time the object is saved; auto_now_add: Automatically set the field to now when the object is first created.',
        value: 'DateTimeField(auto_now_add=True)'
    }
]