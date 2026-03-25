'use client';

import { useState } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PasswordInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> {
  value: string;
  onChange: (value: string) => void;
}

export function PasswordInput({
  value,
  onChange,
  placeholder = 'Enter password',
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-none border-border pr-10"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeSlash weight="regular" className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Eye weight="regular" className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
    </div>
  );
}
