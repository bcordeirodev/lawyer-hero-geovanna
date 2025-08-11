"use client"

import { Textarea, TextareaProps } from '@/components/ui/primitives/textarea'
import { Controller, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'

interface FormTextareaProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<TextareaProps, 'name' | 'value' | 'onChange' | 'onBlur' | 'defaultValue'>,
    Omit<UseControllerProps<TFieldValues, TName>, 'defaultValue'> {
    label?: string
    defaultValue?: string
}

/**
 * Form Textarea Component for react-hook-form integration
 * Wraps the Textarea component with react-hook-form Controller
 */
export function FormTextarea<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    label,
    required,
    ...textareaProps
}: FormTextareaProps<TFieldValues, TName>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            shouldUnregister={shouldUnregister}
            defaultValue={defaultValue as never}
            render={({ field, fieldState }) => (
                <Textarea
                    {...textareaProps}
                    name={field.name}
                    value={field.value || ''}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    label={label}
                    required={required}
                    error={fieldState.error?.message || null}
                />
            )}
        />
    )
}