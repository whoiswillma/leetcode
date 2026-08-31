export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function listFromArray(...val: number[]): ListNode | null {
  const dummy = new ListNode();
  let node = dummy;

  for (const v of val) {
    const next = (node.next = new ListNode(v));
    node = next;
  }

  return dummy.next;
}
