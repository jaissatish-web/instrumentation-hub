import re

with open('src/app/tools/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the Bourdon Tube Simulation block
# We'll locate the start comment and then find the matching closing div for the outer div.
# Simple approach: replace from the comment to the closing </div> of the outer div (the one after the arc div).
# We'll use a regex that matches from the comment to the next '</div>' that is followed by whitespace and then '</div>' (the closing of the gauge face div).
# Actually the structure:
# <div className="absolute inset-0 pointer-events-none">
#   {/* Moving pointer */}
#   <div ...></div>
#   {/* Bourdon tube arc */}
#   <div ...><div ...></div></div>
# </div>
# We'll replace the inner content of the outer div (i.e., everything between the outer div opening and its closing).
# Let's find the outer div opening and its closing.

pattern = r'(\{\/\* Bourdon Tube Simulation \*\/\s*<div className="absolute inset-0 pointer-events-none">)(.*?)(<\/div\s*>)'
# Use DOTALL to match across lines
match = re.search(pattern, content, re.DOTALL)
if match:
    print('Found Bourdon Tube Simulation block')
    # Replace the inner content (group 2) with our new version
    new_inner = '''{/* Bourdon Tube Simulation */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Moving pointer */}
                    <div
                      className="absolute left-1/2 top-1/2 w-[2px] h-[100px] bg-[var(--color-accent-blue)]/80 origin-bottom"
                      style={{ transform: `translateX(-1px) rotate(${(parseFloat(g('pg-pressure')) || 0) * 3.6}deg)`, transition: 'transform 0.2s' }}
                    />
                    {/* Bourdon tube arc */}
                    <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] rounded-full border-[var(--color-border)]/20 -translate-x-[-50%] -translate-y-[-50%] rotate-45">
                      <div
                        className="absolute left-1/2 top-1/2 w-[2px] h-[80px] bg-[var(--color-accent-blue)]/50 origin-bottom"
                        style={{ transform: `translateX(-1px) rotate(${(parseFloat(g('pg-pressure')) || 0) * 1.8}deg)` }}
                      />
                    </div>
                  </div>'''
    # Reconstruct
    new_content = content[:match.start(1)] + match.group(1) + new_inner + match.group(3) + content[match.end(3):]
    with open('src/app/tools/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Replacement done')
else:
    print('Pattern not found')
    # Let's output a snippet for debugging
    import re
    # Find line numbers
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'Bourdon Tube Simulation' in line:
            print(f'Found at line {i}: {line.strip()}')
            # Show context
            for j in range(max(0, i-2), min(len(lines), i+10)):
                print(f'{j:4}: {lines[j]}')
            break
